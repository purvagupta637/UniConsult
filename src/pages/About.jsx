import SectionHeader from '../components/SectionHeader'
import TeamCard from '../components/TeamCard'
import CTASection from '../components/CTASection'
import { teamMembers } from '../data/content'

const About = () => {
  return (
    <div className="space-y-16 pb-20">
      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About us"
          title="A consulting firm built for real-world execution"
          subtitle="We are a team of strategists, technologists, and operators who thrive at the intersection of insight and action."
        />
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-slate-700 dark:text-slate-200">
            <p>
              UniConsult was founded to bridge the gap between slideware and shipped outcomes. Our partners bring experience from top consultancies, product companies, and public-sector programs. We assemble lean squads that uncover insight, prototype solutions, and transfer capability to your teams.
            </p>
            <p>
              We serve startups validating new plays, SMEs scaling responsibly, corporates modernizing, and public agencies improving citizen services. Every engagement pairs strategic clarity with pragmatic delivery plans, crisp governance, and measurable impact.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface">
            <h3 className="text-lg font-semibold text-ink dark:text-white">How we engage</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-200">
              <li>• Discovery and hypothesis sprint to define the problem sharply</li>
              <li>• Co-design workshops with your leaders and frontline teams</li>
              <li>• Pilot delivery with OKRs, dashboards, and change support</li>
              <li>• Scale-up with playbooks, training, and capability transfer</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Mission & Vision"
          title="Ambitious goals, practical pathways"
          subtitle="We believe rigorous thinking and collaborative delivery unlock outsized outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <Card
            title="Mission"
            content="Equip organizations to make confident strategic moves and deliver them with discipline, transparency, and care for people."
          />
          <Card
            title="Vision"
            content="A trusted partner for leaders who expect consulting teams to own outcomes, build capability, and leave lasting operating rhythms."
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Team"
          title="Your nine-person engagement-ready team"
          subtitle="Profiles are placeholders—swap in your classmates and credentials."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  )
}

const Card = ({ title, content }) => (
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface">
    <h3 className="text-xl font-semibold text-ink dark:text-white">{title}</h3>
    <p className="mt-3 text-sm text-slate-700 dark:text-slate-200">{content}</p>
  </div>
)

export default About
