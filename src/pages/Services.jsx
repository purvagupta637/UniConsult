import SectionHeader from '../components/SectionHeader'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import { services } from '../data/content'

const Services = () => {
  return (
    <div className="space-y-16 pb-20">
      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="Strategy through delivery"
          subtitle="Four core offerings with the rigor, tooling, and coaching to embed sustainable change."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What to expect"
          title="A disciplined, transparent delivery approach"
          subtitle="Clear cadence, artifacts, and ownership so leaders stay informed and teams stay energized."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'Discovery sprint',
              text: 'Week 1-2: framing, stakeholder interviews, data intake, hypothesis backlog, and aligned success criteria.',
            },
            {
              title: 'Pilot & build',
              text: 'Week 3-6: prioritized experiments, design + engineering pairing, benefits tracking, and leadership updates.',
            },
            {
              title: 'Scale & enable',
              text: 'Week 7+: playbooks, capability transfer, training, and change communications with measurable KPIs.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 text-sm shadow-sm dark:border-slate-800 dark:bg-surface">
              <h4 className="text-lg font-semibold text-ink dark:text-white">{item.title}</h4>
              <p className="mt-2 text-slate-700 dark:text-slate-200">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  )
}

export default Services
