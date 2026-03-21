import Container from '@/components/layout/Container'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'

export default function EditorSection() {
  const t = useTranslations('Pages.Legal.Editor')

  return (
    <section className="flex items-center mt-15">
      <Container size="md">
        <h2 className="text-2xl font-semibold">{t('title')}</h2>
        <p className="text-text-muted text-lg mt-4">
          {t.rich('text', {
            link: (chunks) => (
              <Link
                href="https://lennytc.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </Link>
            ),
            mail: (chunks) => <Link href={`mailto:${chunks}`}>{chunks}</Link>,
          })}
        </p>
      </Container>
    </section>
  )
}
