import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { FiArrowRight } from 'react-icons/fi'

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
          <Link href="/#contact">
            <Button variant="primary">{t('primaryButton')}</Button>
          </Link>
          <Link href="/projects">
            <Button variant="secondary" Icon={FiArrowRight}>
              {t('secondaryButton')}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
