import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Shield, Sparkles, TrendingUp } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CaseStudyCard from '../components/CaseStudyCard'
import ValueCard from '../components/ValueCard'
import CTASection from '../components/CTASection'
import { caseStudies, services, values } from '../data/content'

const Home = () => {
  const featuredServices = services.slice(0, 3)
  const featuredCases = caseStudies.slice(0, 2)

  return (
    <div className="space-y-20 pb-20">
      <Hero />

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Value proposition"
          title="Strategy, technology, and execution in one team"
          subtitle="We combine board-level thinking with the pragmatism to pilot, iterate, and scale."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <ValueCard key={value.title} value={value} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Built for leadership teams shipping results"
          subtitle="From first hypothesis to measurable outcomes, we bring structured delivery and experienced operators."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:translate-x-1 dark:text-secondary"
          >
            View all services <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center">
          <div className="flex-1">
            <SectionHeader
              eyebrow="Why choose us"
              title="We operate like an embedded team"
              subtitle="Trusted advisors with the sleeves rolled up—shaping strategy, designing solutions, and coaching your leaders."
            />
            <div className="grid gap-3">
              {[
                'Senior-only leads from day one, supported by analysts for research and modeling',
                'Integrated viewpoints across strategy, product, finance, and change management',
                'Clear governance, OKRs, and benefits tracking to keep momentum visible',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800/60">
                  <CheckCircle2 className="mt-1 text-secondary" size={18} />
                  <p className="text-sm text-slate-700 dark:text-slate-200">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Stat label="Projects delivered" value="45+" icon={<Sparkles size={18} />} />
              <Stat label="Average ROI modeled" value="3.4x" icon={<TrendingUp size={18} />} />
              <Stat label="Client satisfaction" value="94%" icon={<Shield size={18} />} />
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100 p-6 shadow-card dark:border-slate-800 dark:from-surface dark:via-slate-900 dark:to-slate-900/80">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">Engagement model</p>
              <h3 className="mt-3 text-2xl font-semibold text-ink dark:text-white">Design → Pilot → Scale</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                Small squads align around a strategic objective, pilot solutions with the front line, then codify playbooks and capability so teams sustain the win.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                <li>• Weekly exec check-ins with crisp decision packs</li>
                <li>• Operating rhythms that survive handover</li>
                <li>• Enablement materials and coaching sessions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Recent engagements"
          subtitle="Representative work from startups, SMEs, corporates, and public-sector teams."
        />
        <div className="grid gap-6">
          {featuredCases.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:translate-x-1 dark:text-secondary"
          >
            View full portfolio <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(18,183,149,0.18),transparent_25%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.18),transparent_22%)]" aria-hidden />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary"
            >
              UniConsult Partners
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="mt-4 text-4xl font-semibold leading-tight md:text-5xl"
            >
              Strategic partners for growth-focused organizations.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mt-4 max-w-2xl text-lg text-slate-200"
            >
              We help startups, SMEs, corporates, and public-sector teams make confident decisions, build resilient capabilities, and deliver measurable outcomes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg transition hover:-translate-y-0.5"
              >
                Book a meeting <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Explore services
              </Link>
            </motion.div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <Badge title="Cross-sector expertise" detail="Startups, SMEs, corporates, and public" />
              <Badge title="Outcome-focused" detail="OKRs, ROI, benefits tracking" />
              <Badge title="Embedded teams" detail="Strategy + delivery + change" />
            </div>
          </div>
          <div>
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(18,183,149,0.08),_transparent_45%),radial-gradient(circle_at_bottom_left,_rgba(245,158,11,0.08),_transparent_40%)]" aria-hidden />
              <div className="relative space-y-4">
                <h3 className="text-lg font-semibold">How we work</h3>
                <p className="text-sm text-slate-300">
                  Structured discovery, sharp hypotheses, and iterative pilots. You get clarity fast, then execution that sticks.
                </p>
                <div className="grid gap-3">
                  {[
                    'Leadership workshops to align ambition and constraints',
                    'Customer, market, and financial analysis to pressure-test moves',
                    'Pilot sprints with clear KPIs, playbooks, and coaching',
                    'Change management baked in from day zero',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-800/50 px-3 py-2">
                      <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-secondary" aria-hidden />
                      <p className="text-sm text-slate-200">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Badge = ({ title, detail }) => (
  <div className="rounded-2xl bg-white/10 px-4 py-3 text-sm shadow-lg backdrop-blur">
    <p className="font-semibold text-white">{title}</p>
    <p className="text-slate-200">{detail}</p>
  </div>
)

const Stat = ({ label, value, icon }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
    <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/10 text-secondary">{icon}</div>
    <div>
      <p className="text-xl font-semibold text-ink dark:text-white">{value}</p>
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
    </div>
  </div>
)

export default Home
