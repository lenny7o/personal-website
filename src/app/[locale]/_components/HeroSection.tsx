import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('Pages.HomePage.Hero')

  return (
    <section className="min-h-screen flex items-center">
      <Container size="md">
        <h3 className="text-2xl sm:text-3xl font-medium">{t('subtitle')}</h3>
        <h1 className="text-4xl sm:text-6xl font-semibold mt-4">
          {t('title')}
        </h1>
        <p className="text-lg text-text-muted mt-7">{t('text')}</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-10">
          <Button variant="primary">{t('primaryButton')}</Button>
          <Button variant="secondary">{t('secondaryButton')}</Button>
        </div>
      </Container>
    </section>
  )
}
