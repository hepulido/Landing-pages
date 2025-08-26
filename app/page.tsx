'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Language Switcher */}
      <div className="flex justify-end p-4 sm:p-6">
        <Link 
          href="/es"
          className="bg-white text-blue-600 px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-sm text-sm sm:text-base"
        >
          Español
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8 sm:mb-12">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="ml-3 sm:ml-4 text-xl sm:text-2xl font-bold text-gray-900">MissedCall Bot</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Turn missed calls into booked jobs — automatically
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
            Instant text-back, voicemail summaries, and &ldquo;who to call first&rdquo; alerts.<br />
            <span className="font-semibold text-gray-900">Works with your current number. No new phone system.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6 sm:mb-8 px-4">
            <div className="flex items-center text-green-600 font-semibold text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Free 14-day trial
            </div>
            <div className="flex items-center text-green-600 font-semibold text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              No setup required
            </div>
            <div className="flex items-center text-green-600 font-semibold text-sm sm:text-base">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Cancel anytime
            </div>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 px-4">
            Early access • Free 14 days • Then $29/month
          </p>
        </div>

        {/* CTA Button */}
        <div className="mb-16 sm:mb-20 text-center px-4">
          <a 
            href="#form"
            className="inline-flex items-center px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-lg sm:text-xl rounded-2xl shadow-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-3xl w-full sm:w-auto justify-center"
          >
            Get 14 days free
            <svg className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Who It's For Section */}
        <div className="mb-16 sm:mb-20 text-center px-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Who it&apos;s for</h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Perfect for plumbers, HVAC, electricians, auto repair, medical clinics, dentists — and works great for salons, restaurants, real estate, cleaning services too.
          </p>
        </div>

        {/* Trust Strip */}
        <div className="mb-16 sm:mb-20 text-center px-4">
          <p className="text-xs sm:text-sm text-gray-500">
            No credit card needed. Cancel anytime. Privacy-first.
          </p>
        </div>

        {/* How It Works Section */}
        <div className="mt-16 sm:mt-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Missed call? We auto-text the caller</h3>
              <p className="text-sm sm:text-base text-gray-600">We auto-text the caller so you don&apos;t lose the lead.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Voicemail to summary</h3>
              <p className="text-sm sm:text-base text-gray-600">We transcribe and detect intent (e.g., &ldquo;emergency&rdquo;, &ldquo;quote request&rdquo;).</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Priority alerts</h3>
              <p className="text-sm sm:text-base text-gray-600">We tell you who to call first to win the job.</p>
            </div>
          </div>
        </div>

        {/* Key Benefits Section */}
        <div className="mt-16 sm:mt-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Capture jobs you&apos;d normally lose</h3>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Reply faster with the right message</h3>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 mx-auto">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Simple setup — keep your current number</h3>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 sm:mt-20 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8 sm:mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Do I need to switch phone providers?</h3>
              <p className="text-sm sm:text-base text-gray-600">No. Keep your number.</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Will this work after hours?</h3>
              <p className="text-sm sm:text-base text-gray-600">Yes. We can pause or send after-hours replies.</p>
            </div>
            
            <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Is it complicated to set up?</h3>
              <p className="text-sm sm:text-base text-gray-600">No. Most businesses are up in ~5 minutes.</p>
            </div>
          </div>
        </div>

        {/* Tally Form Embed */}
        <div id="form" className="mt-16 sm:mt-20 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
              Get 14 Days Free
            </h2>
            
            <div className="tally-form-container">
              <iframe
                src="https://tally.so/embed/npQeVE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="MissedCall Bot Registration Form"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
