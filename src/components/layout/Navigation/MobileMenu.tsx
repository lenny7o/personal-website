'use client'

import NavItem from './NavItem'
import { motion } from 'motion/react'

const menuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
}

const listVariants = {
  hidden: {
    opacity: 0,
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
  visible: { opacity: 1 },
}

export default function MobileMenu() {
  return (
    <motion.div
      className="w-full sm:hidden"
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.3, ease: 'easeInOut' }}
    >
      <motion.ul
        key="mobile-menu"
        className="flex flex-col justify-center items-center gap-6 text-lg overflow-hidden py-6"
        variants={listVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <NavItem href="/about">À propos</NavItem>
        <NavItem href="/projects">Projets</NavItem>
        <NavItem href="/services">Services</NavItem>
        <NavItem href="/#contact">Contact</NavItem>
      </motion.ul>
    </motion.div>
  )
}
