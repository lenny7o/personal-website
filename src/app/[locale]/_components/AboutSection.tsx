import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import Image from 'next/image'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function AboutSection() {
  return (
    <section className="flex items-center mt-60">
      <Container
        size="lg"
        className="flex flex-col items-start sm:flex-row gap-10"
      >
        <div className="hidden sm:block! h-130 flex-1 rounded-2xl overflow-hidden">
          <Image
            src="/images/about.png"
            alt="À propos"
            width={300}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-between h-130 flex-1">
          <div>
            <h2 className="text-4xl font-semibold">À propos de moi</h2>
            <div className="flex items-center gap-5 mt-7 text-text-muted">
              <FiGithub size={20} />
              <FiLinkedin size={20} />
              <FiMail size={20} />
            </div>
            <p className="text-lg text-text-muted mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              scelerisque pretium mauris, quis tristique tortor rhoncus id.
              Interdum et malesuada fames ac ante ipsum primis in faucibus.
            </p>
          </div>
          <div className="mt-10">
            <Button variant="primary">En savoir plus</Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
