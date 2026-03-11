import NavItem from './NavItem'

export default function DesktopMenu() {
  return (
    <ul className="hidden sm:inline-flex! items-center gap-2">
      <NavItem href="/about">À propos</NavItem>
      <NavItem href="/projects">Projets</NavItem>
      <NavItem href="/services">Services</NavItem>
      <NavItem href="/#contact">Contact</NavItem>
    </ul>
  )
}
