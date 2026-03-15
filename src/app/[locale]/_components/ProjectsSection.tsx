import Container from '@/components/layout/Container'
import ProjectCard from '@/components/ui/ProjectCard'
import projects from '@/data/projects'
import { useTranslations } from 'next-intl'

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
      </Container>
    </section>
  )
}
