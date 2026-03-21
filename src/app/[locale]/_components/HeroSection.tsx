import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import StatusLabel from '@/components/ui/StatusLabel'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { FiArrowRight } from 'react-icons/fi'
import AnimatedText from '@/components/ui/AnimatedText'

export default function HeroSection() {
  const t = useTranslations('Pages.HomePage.Hero')

  return (
    <section className="min-h-screen flex items-center mt-7">
      <Container size="md">
        <StatusLabel />
        <h1 className="text-5xl sm:text-7xl font-semibold mt-7">
          <AnimatedText
            content={[{ text: t('title'), order: 1, color: 'normal' }]}
          />
        </h1>
        <p className="text-lg text-text-muted mt-7">
          <AnimatedText
            content={[{ text: t('text'), order: 1, color: 'muted' }]}
          />
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-15">
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
