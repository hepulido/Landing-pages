import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Missed Call Bot - Never Miss Important Calls Again',
  description: 'Get instant text-back, voicemail summaries, and "who to call first" alerts. Works with your current number. No new phone system needed.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Only redirect if we're on the root path and haven't been redirected before
                if (window.location.pathname === '/' && !sessionStorage.getItem('languageRedirected')) {
                  // Get browser language
                  var userLang = navigator.language || navigator.userLanguage;
                  
                  // Check if user prefers Spanish
                  if (userLang.startsWith('es')) {
                    sessionStorage.setItem('languageRedirected', 'true');
                    window.location.href = '/es';
                  } else {
                    // For English or any other language, stay on root
                    sessionStorage.setItem('languageRedirected', 'true');
                  }
                }
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
