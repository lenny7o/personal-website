import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'

export default function NowSection() {
  const t = useTranslations('Pages.About.Contact')

  return (
    <section className="flex items-center mt-40 sm:mt-60">
      <Container size="md" className="text-center">
        <h2 className="text-4xl font-semibold">{t('title')}</h2>
        <p className="text-lg text-text-muted mt-7">{t('text')}</p>
        <Link href="mailto:contact@lennytc.me">
          <Button variant="primary" className="mt-10">
            {t('button')}
          </Button>
        </Link>
      </Container>
    </section>
  )
}
