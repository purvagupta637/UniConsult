import { motion } from 'framer-motion'

const SectionHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-12">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 }}
        className="text-3xl md:text-4xl font-semibold text-ink dark:text-white mt-3"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="mt-4 text-lg text-slate-600 dark:text-slate-300"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}

export default SectionHeader
