import Container from '@/components/layout/Container'
import Icon from '@/components/ui/Icon'
import Card from '@/components/ui/Card'
import { FaBookOpen, FaFeather, FaRegClock } from 'react-icons/fa6'
import { useTranslations } from 'next-intl'

export default function ValuesSection() {
  const t = useTranslations('Pages.About.Values')

  return (
    <section className="flex items-center mt-60">
      <Container
        size="lg"
        className="flex flex-col sm:flex-row items-start gap-10 sm:gap-25"
      >
        <h2 className="text-4xl font-semibold whitespace-nowrap">
          {t('title')}
        </h2>
        <div className="flex flex-col gap-4 w-full">
          <Card>
            <Icon Icon={FaBookOpen} size={40} />
            <h3 className="text-xl font-semibold mt-5">{t('values.0.name')}</h3>
            <p className="text-text-muted mt-2">{t('values.0.description')}</p>
          </Card>
          <Card>
            <Icon Icon={FaFeather} size={40} />
            <h3 className="text-xl font-semibold mt-5">{t('values.1.name')}</h3>
            <p className="text-text-muted mt-2">{t('values.1.description')}</p>
          </Card>
          <Card>
            <Icon Icon={FaRegClock} size={40} />
            <h3 className="text-xl font-semibold mt-5">{t('values.2.name')}</h3>
            <p className="text-text-muted mt-2">{t('values.2.description')}</p>
          </Card>
        </div>
      </Container>
    </section>
  )
}
