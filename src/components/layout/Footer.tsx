import { Link } from '@/i18n/navigation'
import Container from './Container'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { useTranslations } from 'next-intl'

export default function Footer() {
  const t = useTranslations('Layout.Footer')

  return (
    <footer className="mt-60">
      <Container
        size="lg"
        className="text-text-muted p-7 flex items-center justify-between"
      >
        <div className="flex items-center gap-5">
          <FiGithub size={20} />
          <FiLinkedin size={20} />
          <FiMail size={20} />
        </div>
        <Link href="/legal" className="text-sm py-2 px-3">
          {t('legal')}
        </Link>
      </Container>
    </footer>
  )
}
