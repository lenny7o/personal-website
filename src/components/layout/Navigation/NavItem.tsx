import { Link } from '@/i18n/navigation'

type NavItemProps = {
  href: string
  target?: string
  children: React.ReactNode
}

export default function NavItem({
  href,
  target = '_self',
  children,
}: Readonly<NavItemProps>) {
  return (
    <li>
      <Link
        href={href}
        className="font-semibold transition-colors px-3 py-2"
        target={target}
        {...(target === '_blank' && { rel: 'noopener noreferrer' })}
      >
        {children}
      </Link>
    </li>
  )
}
