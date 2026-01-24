import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/content'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur bg-white/80 dark:bg-surface/80 border-b border-slate-200/70 dark:border-slate-800">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-primary/90 dark:bg-secondary/90 text-white grid place-items-center font-bold">U</div>
          <div>
            <p className="text-base font-semibold text-ink dark:text-white">UniConsult</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Management Consulting</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition hover:text-primary dark:hover:text-secondary ${
                  isActive ? 'text-primary dark:text-secondary' : 'text-slate-600 dark:text-slate-300'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-secondary"
          >
            Book a call
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle minimal />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-800 shadow-sm transition hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-surface dark:text-white dark:hover:border-secondary dark:hover:text-secondary"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-surface shadow-lg">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6 lg:px-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 text-base font-medium transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                    isActive ? 'text-primary dark:text-secondary' : 'text-slate-700 dark:text-slate-200'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-2 rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:bg-secondary"
            >
              Book a consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar
