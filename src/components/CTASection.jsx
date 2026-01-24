import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="relative mx-auto mt-20 max-w-6xl overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-secondary px-6 py-12 text-white shadow-card sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Let&apos;s talk</p>
        <h3 className="mt-3 text-3xl font-semibold leading-tight">Bring clarity to your next strategic move.</h3>
        <p className="mt-3 text-white/90">
          Whether you need a market entry plan, a technology roadmap, or a public-sector delivery sprint, we partner with teams to move from idea to impact.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-primary shadow-md transition hover:-translate-y-0.5"
          >
            Book a consultation
          </Link>
          <Link
            to="/services"
            className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
          >
            Explore services
          </Link>
        </div>
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.18),_transparent_55%)] lg:block" />
    </section>
  )
}

export default CTASection
