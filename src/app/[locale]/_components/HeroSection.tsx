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
        <h1 className="text-5xl sm:text-7xl font-semibold">{t('title')}</h1>
        <p className="text-lg text-text-muted mt-7">{t('text')}</p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-10">
          <Link href="/#contact">
            <Button variant="primary" className="w-full">
              {t('primaryButton')}
            </Button>
          </Link>
          <Link href="/projects">
            <Button variant="secondary" Icon={FiArrowRight} className="w-full">
              {t('secondaryButton')}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
