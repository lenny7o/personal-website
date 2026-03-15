import { cn } from '@/lib/cn'
import { IconType } from 'react-icons'

type ButtonProps = {
  children: React.ReactNode
  variant?: keyof typeof variants
  Icon?: IconType
  onClick?: () => void
  className?: string
}

const base =
  'px-5 py-3 text-base inline-flex items-center justify-center align-middle font-medium rounded-4xl cursor-pointer hover:scale-105 transition-transform group'

const variants = {
  primary: 'bg-primary text-text-inverse border border-primary',
  secondary: 'bg-surface text-text border border-border',
}

export default function Button({
  children,
  variant = 'primary',
  Icon,
  onClick,
  className,
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      className={cn(base, variants[variant], className)}
      onClick={onClick}
      {...props}
    >
      {children}
      {Icon && (
        <Icon
          className="ml-2 -rotate-45 group-hover:rotate-0 transition-transform"
          size={20}
          aria-hidden="true"
        />
      )}
    </button>
  )
}
