import SectionHeader from '../components/SectionHeader'
import CaseStudyCard from '../components/CaseStudyCard'
import CTASection from '../components/CTASection'
import { caseStudies } from '../data/content'

const Projects = () => {
  return (
    <div className="space-y-16 pb-20">
      <section className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Case studies"
          title="Sample engagements"
          subtitle="Problem → Approach → Outcome snapshots that show how we work with leadership teams."
        />
        <div className="grid gap-6">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.title} study={study} />
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  )
}

export default Projects
