import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import HeroSection from './_components/HeroSection'
import { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import FactsSection from './_components/FactsSection'
import PathSection from './_components/PathSection'

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.About.Metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <div className="bg-primary w-full h-min rounded-4xl py-10 sm:py-40 mt-60">
        <FactsSection />
        <PathSection />
      </div>
    </>
  )
}
