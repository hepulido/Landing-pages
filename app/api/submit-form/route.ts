import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'your-service-role-key'

const supabase = createClient(supabaseUrl, supabaseKey)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, business, phone, email, city } = body

    console.log('Form submission received:', { name, business, phone, email, city })

    // Validate required fields
    if (!name || !business || !phone || !email || !city) {
      console.log('Missing required fields')
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Store submission in Supabase database
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          name,
          business,
          phone,
          email,
          city,
          submitted_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to save submission' },
        { status: 500 }
      )
    }

    console.log('Form submission stored in database:', data)

    // Submit to Tally form
    try {
      const tallyFormUrl = 'https://tally.so/r/npQeVE'
      
      // Tally form data - adjust field names based on your Tally form
      const tallyData = {
        // Map your form fields to Tally field names
        // You'll need to check your Tally form for exact field names
        'name': name,
        'email': email,
        'phone': phone,
        'company': business,
        'city': city,
        // Add any other fields your Tally form has
      }

      const response = await fetch(tallyFormUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tallyData),
      })

      if (response.ok) {
        console.log('Successfully submitted to Tally')
      } else {
        console.log('Tally submission failed:', response.status)
      }
    } catch (error) {
      console.log('Tally submission error:', error.message)
    }

    return NextResponse.json({ 
      success: true,
      message: 'Form submitted successfully! Your data has been saved.',
      submissionId: data[0].id
    })
    
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Add a GET endpoint to view submissions (for admin purposes)
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .order('submitted_at', { ascending: false })

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json(
        { error: 'Failed to read submissions' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      submissions: data,
      count: data.length,
      message: 'Form submissions from database'
    })
  } catch (error) {
    console.error('Error reading submissions:', error)
    return NextResponse.json(
      { error: 'Failed to read submissions' },
      { status: 500 }
    )
  }
} 