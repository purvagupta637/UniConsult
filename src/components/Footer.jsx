import { Link } from 'react-router-dom'
import { navLinks, contactDetails } from '../data/content'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="UniConsult Logo" className="h-40 w-40" />
              <div>
                <p className="text-lg font-semibold text-ink dark:text-white">UniConsult</p>
                <p className="text-sm text-slate-500 dark:text-slate-300">Management & Business Consulting</p>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm text-slate-600 dark:text-slate-300">
              We help leadership teams translate ambition into execution across strategy, technology, finance, and the public sector with practical, data-driven, and collaborative approach.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink dark:text-white">Explore</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-slate-600 transition hover:text-primary dark:text-slate-300 dark:hover:text-secondary">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-ink dark:text-white">Contact</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-300">
              <span>{contactDetails.email}</span>
              <span>{contactDetails.phone}</span>
              <span>{contactDetails.address}</span>
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} UniConsult. All rights reserved.</span>
          <span>Built for the University Consulting Practicum.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
