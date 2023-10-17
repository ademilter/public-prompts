import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const title = 'Public Prompts'
const description= 'Publicly shared prompt codes'
const url= 'https://public-prompts.vercel.app'

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(url),
  openGraph: {
    title,
    description,
    url,
    siteName: title,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@ademilter',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-white text-zinc-900 dark:bg-zinc-800 dark:text-zinc-200">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
