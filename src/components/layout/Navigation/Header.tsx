import Container from '../Container'
import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full">
      <Container size="lg" className="flex justify-center items-center">
        <Navbar />
      </Container>
    </header>
  )
}
