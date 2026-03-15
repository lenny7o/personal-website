import { IconType } from 'react-icons'

type FactCardProps = {
  Icon: IconType
  text: string
}

export default function FactCard({ Icon, text }: FactCardProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-transparent text-text-muted rounded-3xl px-4 py-2 border border-border">
      <Icon size={20} />
      <span>{text}</span>
    </div>
  )
}
