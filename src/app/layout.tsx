import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NaviTransit - Smart Transportation Monitoring',
  description: 'Real-time vehicle tracking and route planning across multiple cities',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-primary text-gray-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
} 