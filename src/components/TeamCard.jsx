import { User } from 'lucide-react'
import { motion } from 'framer-motion'

const TeamCard = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="flex flex-col items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-surface"
    >
      <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
        <User size={22} />
      </div>
      <div>
        <p className="text-lg font-semibold text-ink dark:text-white">{member.name}</p>
        <p className="text-sm text-slate-600 dark:text-slate-300">{member.role}</p>
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">Client-facing consultant placeholder. Add bio and credentials.</p>
    </motion.div>
  )
}

export default TeamCard
