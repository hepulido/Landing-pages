# 🚀 Missed Call Bot Landing Page

A beautiful, responsive landing page for Missed Call Bot with automatic language detection, Google Forms integration, and database storage.

## ✨ Features

### 🌍 **Automatic Language Detection**
- **Smart Detection**: Automatically detects user's browser language
- **Spanish Users**: If browser is set to Spanish (`es-*`), automatically redirects to `/es`
- **English Users**: All other languages default to English version
- **Manual Override**: Language switcher buttons on both pages
- **No Confusion**: Users don't need to know about `/es` - it's automatic!

### 📝 **Form Submissions**
- **Database Storage**: Form data stored in Supabase database (free tier)
- **Google Forms Integration**: Also sends data to your Google Form (optional)
- **Real-time Responses**: Check submissions in admin dashboard
- **Error Handling**: Friendly error messages if something goes wrong
- **Success Messages**: Beautiful "Thank you" messages in both languages

### 🎨 **Design & UX**
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Beautiful gradients, shadows, and animations
- **Fast Loading**: Optimized for performance
- **Accessibility**: Screen reader friendly

## 🗄️ **Database Solution**

### **Why We Need a Database**
Your form submissions need to be stored safely and scalably:
- ✅ **50,000+ submissions** handled easily
- ✅ **Automatic backups** every day
- ✅ **Works on Vercel** (no file system issues)
- ✅ **Real-time updates** and admin dashboard

### **Setup Required**
1. **Create Supabase account** (free): https://supabase.com
2. **Follow the setup guide**: [DATABASE_SETUP.md](./DATABASE_SETUP.md)
3. **Add environment variables** to your deployment

## 🚀 **Deployment**

### **Vercel (Recommended)**
1. **Push code to GitHub**
2. **Connect to Vercel**
3. **Add environment variables**:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
   ```
4. **Deploy!**

### **Other Platforms**
- **Netlify**: Works great
- **Railway**: Good alternative
- **Render**: Also supported

## 📊 **Viewing Submissions**

### **Admin Dashboard**
Visit: `https://your-domain.com/admin`
- **Real-time table** of all submissions
- **Sort by date**
- **Click email** to send messages
- **Refresh** to see new submissions

### **API Endpoint**
Get JSON data: `https://your-domain.com/api/submit-form`

## 💰 **Costs**

### **Free Tier (Perfect for most users)**
- ✅ **Supabase**: 50,000 submissions/month
- ✅ **Vercel**: Unlimited deployments
- ✅ **Total cost**: $0/month

### **If you grow**
- **Supabase Pro**: $25/month (100K submissions)
- **Vercel Pro**: $20/month (if needed)

## 🔧 **Development**

### **Local Setup**
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Visit http://localhost:3000
```

### **Environment Variables**
Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## 📁 **Project Structure**
```
Landing-pages/
├── app/
│   ├── page.tsx          # English landing page
│   ├── es/page.tsx       # Spanish landing page
│   ├── admin/page.tsx    # Admin dashboard
│   ├── api/submit-form/  # Form submission API
│   └── layout.tsx        # Root layout with language detection
├── DATABASE_SETUP.md     # Database setup guide
├── GOOGLE_FORMS_SETUP.md # Google Forms integration guide
└── README.md            # This file
```

## 🌐 **URLs**

- **English**: `/` (or auto-detected)
- **Spanish**: `/es` (or auto-detected)
- **Admin**: `/admin`
- **API**: `/api/submit-form`

## 🔒 **Security**

- ✅ **Environment variables** for sensitive data
- ✅ **Database encryption** at rest
- ✅ **Automatic backups** daily
- ✅ **Rate limiting** on API endpoints

## 🆘 **Troubleshooting**

### **Form not working?**
1. Check environment variables are set
2. Verify Supabase table exists
3. Check browser console for errors

### **Database connection issues?**
1. Verify Supabase URL and key
2. Check table permissions
3. See [DATABASE_SETUP.md](./DATABASE_SETUP.md)

### **Google Forms not working?**
1. Check form is set to "Respondent view"
2. Verify entry IDs are correct
3. See [GOOGLE_FORMS_SETUP.md](./GOOGLE_FORMS_SETUP.md)

## 📞 **Support**

- **Database setup**: [DATABASE_SETUP.md](./DATABASE_SETUP.md)
- **Google Forms**: [GOOGLE_FORMS_SETUP.md](./GOOGLE_FORMS_SETUP.md)
- **Supabase docs**: https://supabase.com/docs
- **Vercel docs**: https://vercel.com/docs

---

## 🎉 **Ready for Production!**

Your landing page is now:
- ✅ **Scalable** to thousands of users
- ✅ **Secure** with database encryption
- ✅ **Fast** with optimized performance
- ✅ **Reliable** with automatic backups
- ✅ **Easy to manage** with admin dashboard

**Deploy and start collecting leads!** 🚀
