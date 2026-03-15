import { IconType } from 'react-icons'

type IconProps = {
  Icon: IconType
  size: number
}

export default function Icon({ Icon, size }: IconProps) {
  return (
    <Icon
      size={size}
      className="bg-primary text-text-inverse rounded-xl p-2 shadow-md"
    />
  )
}
