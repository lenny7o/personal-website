import type { Project } from '@/types/project'

const projects: Project[] = [
  {
    id: crypto.randomUUID(),
    name: 'Nexus',
    image: '/projects/nexus-website.png',
    link: 'https://nexus-projets.fr/',
    inHomepage: true,
    date: new Date('2025-10-28'),
  },
]

export default projects
