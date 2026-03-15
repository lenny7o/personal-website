import { cn } from '@/lib/cn'
import { IconType } from 'react-icons'

type LabelProps = {
  Icon: IconType
  text: string
  size?: keyof typeof sizes
}

const sizes = {
  sm: {
    className: 'text-sm',
    iconSize: 14,
  },
  md: {
    className: 'text-base',
    iconSize: 20,
  },
  lg: {
    className: 'text-lg',
    iconSize: 24,
  },
}

export default function Label({ Icon, text, size = 'md' }: LabelProps) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 bg-transparent text-text-muted rounded-3xl px-4 py-2 border border-border',
        sizes[size].className
      )}
    >
      <Icon size={sizes[size].iconSize} />
      <span>{text}</span>
    </div>
  )
}
