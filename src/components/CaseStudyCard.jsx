import { Lightbulb, Target, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'

const CaseStudyCard = ({ study }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-surface"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">{study.sector}</p>
          <h3 className="mt-2 text-xl font-semibold text-ink dark:text-white">{study.title}</h3>
        </div>
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <Item icon={<Target size={18} />} label="Problem" text={study.problem} />
        <Item icon={<Lightbulb size={18} />} label="Approach" text={study.approach} />
        <Item icon={<Trophy size={18} />} label="Outcome" text={study.outcome} />
      </div>
      <ul className="mt-2 grid gap-2 text-sm text-slate-700 dark:text-slate-200 md:grid-cols-3">
        {study.metrics.map((metric) => (
          <li key={metric} className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-2 text-sm text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
            <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
            <span>{metric}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

const Item = ({ icon, label, text }) => (
  <div className="rounded-xl bg-slate-50 px-3 py-3 text-sm text-slate-700 dark:bg-slate-800/60 dark:text-slate-200">
    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-primary dark:text-secondary">
      {icon}
      <span>{label}</span>
    </div>
    <p className="mt-2 leading-relaxed">{text}</p>
  </div>
)

export default CaseStudyCard
