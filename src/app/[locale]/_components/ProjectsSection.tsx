import Container from '@/components/layout/Container'
import { useTranslations } from 'next-intl'

export default function ProjectsSection() {
  const t = useTranslations('Pages.HomePage.Projects')

  return (
    <section className="flex items-center">
      <Container size="lg">
        <h2 className="text-4xl font-semibold text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          <span className="col-span-full text-center w-full text-lg text-text-muted">
            Aucun projet disponible
          </span>
        </div>
      </Container>
    </section>
  )
}
