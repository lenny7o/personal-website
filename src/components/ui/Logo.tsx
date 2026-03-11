import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function Logo({ size }: { size: number }) {
  const t = useTranslations('UI.Logo')

  return <Image src="/logo.svg" alt={t('alt')} width={size} height={size} />
}
