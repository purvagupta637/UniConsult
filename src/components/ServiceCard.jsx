import { Compass, Cpu, LineChart, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const iconMap = {
  Compass,
  Cpu,
  LineChart,
  ShieldCheck,
}

const ServiceCard = ({ service }) => {
  const Icon = iconMap[service.icon] || Compass
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card dark:border-slate-800 dark:bg-surface"
    >
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary/10 text-primary dark:bg-secondary/10 dark:text-secondary">
          <Icon size={24} strokeWidth={1.6} />
        </div>
        <h3 className="text-xl font-semibold text-ink dark:text-white">{service.title}</h3>
      </div>
      <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
      <ul className="mt-4 flex flex-col gap-2 text-sm text-slate-700 dark:text-slate-200">
        {service.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-2">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-secondary" aria-hidden />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default ServiceCard
