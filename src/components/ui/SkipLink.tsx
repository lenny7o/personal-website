import Link from 'next/link'

export default function SkipLink() {
  return (
    <Link
      href="#content"
      className="focus:bg-primary focus:text-text-inverse sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-4xl focus:px-6 focus:py-4 transition-all"
    >
      Aller au contenu principal
    </Link>
  )
}
