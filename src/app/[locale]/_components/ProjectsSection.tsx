import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import ProjectCard from '@/components/ui/ProjectCard'
import projects from '@/data/projects'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import { FiArrowRight } from 'react-icons/fi'

export default function ProjectsSection() {
  const t = useTranslations('Pages.HomePage.Projects')
  const displayedProjects = projects.filter((project) => project.inHomepage)

  return (
    <section className="flex items-center">
      <Container size="lg">
        <h2 className="text-4xl font-semibold text-center">{t('title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 mt-10">
          {displayedProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              image={project.image}
              link={project.link}
            />
          ))}
        </div>
        <div className="flex items-center justify-center w-full mt-15">
          <Link href="/projects">
            <Button variant="secondary" Icon={FiArrowRight}>
              {t('button')}
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
