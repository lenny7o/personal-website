import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { GenerateMetadataProps } from '@/types/generateMetadataProps'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({
  params,
}: Readonly<GenerateMetadataProps>): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({
    locale,
    namespace: 'Pages.Blog.Metadata',
  })

  return {
    title: t('title'),
    description: t('description'),
  }
}

export default function BlogPage() {
  const t = useTranslations('Pages.Blog')

  return (
    <section className="min-h-screen flex items-center justify-center">
      <Container size="md" className="flex flex-col text-center items-center">
        <h1 className="text-3xl font-semibold text-center">{t('title')}</h1>
        <p className="text-text-muted text-lg mt-7">{t('text')}</p>
        <Link href="/" className="mt-10">
          <Button>{t('button')}</Button>
        </Link>
      </Container>
    </section>
  )
}
