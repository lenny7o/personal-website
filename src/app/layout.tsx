import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SmoothScroll from '@/components/layout/SmoothScroll'
import SkipLink from '@/components/ui/SkipLink'
import '@/styles/index.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | LennyTC',
    default: 'LennyTC',
  },
  description: 'Personal website of Lenny TESTU--CHARPENTIER',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll>
          <SkipLink href="#content" />
          <main id="content">{children}</main>
        </SmoothScroll>
      </body>
    </html>
  )
}
