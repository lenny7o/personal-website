'use client'

import { useRef } from 'react'
import TimelineItem from './TimelineItem'
import { motion, useScroll, useSpring } from 'motion/react'

const timelineData = [
  {
    date: 'Date',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    date: 'Date',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    date: 'Date',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    date: 'Date',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    date: 'Date',
    title: 'Lorem ipsum',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
]

export default function Timeline() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div ref={containerRef} className="relative w-full pt-20 pb-40 mt-15">
      <div className="absolute left-0 top-0 w-6 h-full flex justify-center">
        <div className="w-1 h-full bg-[#414141]" />
        <motion.div
          style={{ scaleY }}
          className="absolute w-1 h-full bg-surface origin-top"
        />
      </div>

      <div className="pointer-events-none absolute top-0 inset-x-0 h-32 w-full bg-linear-to-b from-primary to-transparent z-20" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 w-full bg-linear-to-t from-primary to-transparent z-20" />

      <div className="relative z-10">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}
