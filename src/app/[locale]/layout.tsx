import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { getTranslations } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import SmoothScroll from '@/components/layout/SmoothScroll'
import Header from '@/components/layout/Navigation/Header'
import SkipLink from '@/components/ui/SkipLink'
import '@/styles/index.css'

type LayoutProps = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

type GenerateMetadataProps = {
  params: Promise<{ locale: string }>
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.HomePage.Metadata',
  })

  return {
    title: {
      template: '%s | LennyTC',
      default: t('title'),
    },
    description: t('description'),
  }
}

export default async function RootLayout({
  children,
  params,
}: Readonly<LayoutProps>) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body className={`${inter.variable} antialiased`}>
        <NextIntlClientProvider>
          <SmoothScroll>
            <SkipLink href="#content" />
            <Header />
            <main id="content">{children}</main>
          </SmoothScroll>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
