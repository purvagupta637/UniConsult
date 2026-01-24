import { Gauge, Handshake, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Sparkles,
  Gauge,
  Handshake,
}

const ValueCard = ({ value }) => {
  const Icon = iconMap[value.icon] || Sparkles
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-surface"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-secondary/10 text-secondary">
        <Icon size={20} strokeWidth={1.7} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink dark:text-white">{value.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{value.description}</p>
    </motion.div>
  )
}

export default ValueCard
