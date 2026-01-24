import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import SectionHeader from '../components/SectionHeader'
import CTASection from '../components/CTASection'
import { contactDetails } from '../data/content'

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitted')
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <div className="space-y-16 pb-20">
      <section className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Contact"
          title="Start the conversation"
          subtitle="Tell us about your challenge. We will respond within one business day."
        />
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface">
            <div className="space-y-4">
              <Field label="Name" name="name" value={formState.name} onChange={handleChange} required />
              <Field label="Email" name="email" type="email" value={formState.email} onChange={handleChange} required />
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-ink dark:text-white" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/20"
                  placeholder="Share context on goals, timelines, and stakeholders."
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-xs text-slate-500 dark:text-slate-400">We keep your details private and only contact you about this inquiry.</p>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-secondary"
                >
                  {status === 'submitted' ? 'Submitted' : 'Send message'}
                  <Send size={16} />
                </button>
              </div>
              {status === 'submitted' && (
                <p className="text-sm text-secondary">Thanks! We received your note and will respond shortly.</p>
              )}
            </div>
          </form>

          <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-surface">
            <h3 className="text-lg font-semibold text-ink dark:text-white">Firm details</h3>
            <Info icon={<Mail size={18} />} label="Email" value={contactDetails.email} />
            <Info icon={<Phone size={18} />} label="Phone" value={contactDetails.phone} />
            <Info icon={<MapPin size={18} />} label="Location" value={contactDetails.address} />
            <div className="pt-2">
              <p className="text-sm font-semibold text-ink dark:text-white">Social</p>
              <div className="mt-2 flex flex-wrap gap-3 text-sm">
                {contactDetails.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="rounded-full border border-slate-200 px-3 py-1.5 text-slate-700 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4 text-sm text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
              <p className="font-semibold text-ink dark:text-white">Typical next step</p>
              <p className="mt-1">A 30-minute fit call to understand your goals, followed by a tailored proposal within 3 business days.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTASection />
      </div>
    </div>
  )
}

const Field = ({ label, name, value, onChange, type = 'text', required }) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-ink dark:text-white" htmlFor={name}>
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 shadow-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:focus:border-secondary dark:focus:ring-secondary/20"
      placeholder={`Enter your ${label.toLowerCase()}`}
    />
  </div>
)

const Info = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700 dark:bg-slate-900/70 dark:text-slate-200">
    <div className="mt-1 text-primary dark:text-secondary">{icon}</div>
    <div>
      <p className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</p>
      <p className="text-sm font-semibold text-ink dark:text-white">{value}</p>
    </div>
  </div>
)

export default Contact
