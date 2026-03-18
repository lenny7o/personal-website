import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('Pages.About.Hero')

  return (
    <section id="about" className="flex items-center mt-60">
      <Container size="md">
        <h1 className="text-4xl sm:text-6xl font-semibold mt-4 text-center">
          {t('title')}
        </h1>
        <div className="flex flex-col justify-center sm:flex-row sm:items-center gap-3 mt-10">
          <Link href="/#contact">
            <Button variant="primary" className="w-full">
              {t('primaryButton')}
            </Button>
          </Link>
          <Link href="#journey">
            <Button variant="secondary" className="w-full">
              {t('secondaryButton')}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
