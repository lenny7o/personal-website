'use client'

import Logo from '@/components/ui/Logo'
import Link from 'next/link'
import DesktopMenu from './DesktopMenu'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import ToggleMenu from './ToggleMenu'
import { AnimatePresence } from 'motion/react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="flex flex-col justify-center items-center w-full sm:w-max! sm:gap-8 bg-surface border border-border rounded-4xl pr-3">
      <div className="flex justify-between items-center gap-7 w-full">
        <Link href="/" className="p-2">
          <Logo size={40} />
        </Link>

        <DesktopMenu />

        <ToggleMenu isMenuOpen={isOpen} toggleMenu={toggleMenu} />
      </div>

      <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
    </nav>
  )
}
