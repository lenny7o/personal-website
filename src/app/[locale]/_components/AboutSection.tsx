import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function AboutSection() {
  const t = useTranslations('Pages.HomePage.About')

  return (
    <section className="flex items-center mt-40 sm:mt-60">
      <Container
        size="lg"
        className="flex flex-col items-start sm:flex-row gap-10"
      >
        <div className="hidden sm:block! h-130 flex-1 rounded-2xl overflow-hidden border border-border">
          <Image
            src="/illustrations/aboutme.svg"
            alt="À propos"
            width={300}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between h-130 flex-1">
          <div>
            <h2 className="text-4xl font-semibold">{t('title')}</h2>
            <div className="flex items-center gap-1 mt-5 text-text-muted">
              <Link
                href="https://github.com/lenny7o"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <FiGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/lenny-testu-charpentier-b539a0398/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2"
              >
                <FiLinkedin size={20} />
              </Link>
              <Link href="mailto:contact@lennytc.me" className="p-2">
                <FiMail size={20} />
              </Link>
            </div>
            <p className="text-lg text-text-muted mt-10">{t('text')}</p>
          </div>
          <div className="mt-10">
            <Link href="/about">
              <Button variant="primary">{t('button')}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}
