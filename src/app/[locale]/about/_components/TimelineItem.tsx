import { motion } from 'motion/react'
import Card from '@/components/ui/Card'
import Label from '@/components/ui/Label'
import { FaRegCalendar } from 'react-icons/fa'

type TimelineItemProps = {
  item: {
    date: string
    title: string
    text: string
  }
  index: number
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative grid grid-cols-[1.5rem_1fr] py-10 w-full"
    >
      <div className="flex justify-center items-start">
        <div className="w-5 h-5 bg-surface rounded-full z-10 border-4 border-primary" />
      </div>

      <div className="ml-5 sm:ml-10">
        <Card>
          <Label Icon={FaRegCalendar} text={item.date} size="sm" />
          <h3 className="text-xl font-semibold mt-7">{item.title}</h3>
          <p className="text-text-muted text-lg mt-2">{item.text}</p>
        </Card>
      </div>
    </motion.div>
  )
}
