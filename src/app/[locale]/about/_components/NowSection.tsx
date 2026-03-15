import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { useTranslations } from 'next-intl'

export default function NowSection() {
  const t = useTranslations('Pages.About.Now')

  return (
    <section className="flex items-center mt-60">
      <Container size="md" className="text-center">
        <h2 className="text-4xl font-semibold">{t('title')}</h2>
        <p className="text-lg text-text-muted mt-7">{t('text')}</p>
        <Button variant="primary" className="mt-10">
          {t('button')}
        </Button>
      </Container>
    </section>
  )
}
