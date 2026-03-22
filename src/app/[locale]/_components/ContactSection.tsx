import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import FAQCard from './FAQCard'
import { mail } from '@/config'

export default function ContactSection() {
  const t = useTranslations('Pages.HomePage.Contact')

  return (
    <section id="contact" className="flex items-center mt-40 sm:mt-60">
      <Container
        size="lg"
        className="flex flex-col items-center sm:items-start! sm:flex-row gap-25 sm:gap-10"
      >
        <div className="flex flex-col items-center text-center sm:items-start! sm:text-left! flex-1">
          <h2 className="text-4xl font-semibold">{t('title')}</h2>
          <p className="text-lg text-text-muted mt-7">{t('text')}</p>
          <Link href={`mailto:${mail}`}>
            <Button variant="primary" className="mt-10">
              {t('button')}
            </Button>
          </Link>
        </div>
        <div className="flex flex-col items-end gap-3 w-full flex-1">
          <FAQCard question={t('faq1.question')} answer={t('faq1.answer')} />
          <FAQCard question={t('faq2.question')} answer={t('faq2.answer')} />
          <FAQCard question={t('faq3.question')} answer={t('faq3.answer')} />
          <FAQCard question={t('faq4.question')} answer={t('faq4.answer')} />
        </div>
      </Container>
    </section>
  )
}
