import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Malel Heights — Gadrise Properties Limited',
  description: "Eldoret's premier gated community. 56 exclusive quarter-acre estates and 49 premium four-bedroom maisonettes by Gadrise Properties Limited.",
  keywords: ['Malel Heights', 'Malel Residence', 'Gadrise Properties', 'Eldoret real estate', 'gated community Kenya', 'Elgon View'],
  openGraph: {
    title: 'Malel Heights — Gadrise Properties Limited',
    description: "Eldoret's premier gated community. 56 exclusive estates and 49 premium maisonettes.",
    type: 'website',
    locale: 'en_KE',
    siteName: 'Malel Heights by Gadrise Properties',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
