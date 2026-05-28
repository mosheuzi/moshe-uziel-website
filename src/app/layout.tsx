import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moshe Uziel | AI Strategy, Governance & Agentic Systems',
  description: 'Helping complex organizations navigate AI strategy, infrastructure, governance, and agentic systems transformation. AI is easy to demo, hard to operationalize.',
  keywords: ['AI strategy', 'AI governance', 'agentic systems', 'AI infrastructure', 'enterprise AI', 'public sector AI', 'healthcare AI', 'AI policy'],
  authors: [{ name: 'Moshe Uziel' }],
  creator: 'Moshe Uziel',
  publisher: 'Moshe Uziel',
  metadataBase: new URL('https://mosheuziel.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mosheuziel.com',
    title: 'Moshe Uziel | AI Strategy, Governance & Agentic Systems',
    description: 'Helping complex organizations navigate AI strategy, infrastructure, governance, and agentic systems transformation. AI is easy to demo, hard to operationalize.',
    siteName: 'Moshe Uziel',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moshe Uziel | AI Strategy, Governance & Agentic Systems',
    description: 'Helping complex organizations navigate AI strategy, infrastructure, governance, and agentic systems transformation.',
    creator: '@mosheuziel',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://mosheuziel.com" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}