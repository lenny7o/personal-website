import { ReactLenis } from 'lenis/react'

type SmoothScrollProps = {
  children: React.ReactNode
}

export default function SmoothScroll({
  children,
}: Readonly<SmoothScrollProps>) {
  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
    </>
  )
}
