import NavItem from './NavItem'

type DesktopMenuProps = {
  links: { href: string; label: string }[]
}

export default function DesktopMenu({ links }: Readonly<DesktopMenuProps>) {
  return (
    <ul className="hidden sm:inline-flex! items-center gap-2">
      {links.map((link, index) => (
        <NavItem key={index} href={link.href}>
          {link.label}
        </NavItem>
      ))}
    </ul>
  )
}
