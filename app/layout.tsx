import './globals.css'
import React from 'react'

export const metadata = {
  title: 'jeev - give blood your way',
  description: 'join the gen z blood donation movement - a cultural moment, not a medical task.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-smoke font-sans">
        {children}
      </body>
    </html>
  )
} 