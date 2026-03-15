import Container from '@/components/layout/Container'
import Timeline from './Timeline'
import { useTranslations } from 'next-intl'

export default function JourneySection() {
  const t = useTranslations('Pages.About.Journey')

  return (
    <section id="journey" className="flex items-center mt-60">
      <Container size="md">
        <h2 className="text-4xl text-text-inverse font-semibold text-center">
          {t('title')}
        </h2>
        <Timeline />
      </Container>
    </section>
  )
}
