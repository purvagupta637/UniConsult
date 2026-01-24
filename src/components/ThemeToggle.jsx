import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../providers/ThemeProvider'

const ThemeToggle = ({ minimal = false }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={`inline-flex items-center gap-2 rounded-full border transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-secondary dark:focus:ring-offset-surface ${
        minimal
          ? 'border-transparent bg-transparent px-2 py-2 text-slate-700 dark:text-slate-200'
          : 'border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm hover:border-primary hover:text-primary dark:border-slate-700 dark:bg-surface dark:text-slate-200 dark:hover:border-secondary dark:hover:text-secondary'
      }`}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
      {!minimal && <span className="text-sm font-medium">{isDark ? 'Light' : 'Dark'} mode</span>}
    </button>
  )
}

export default ThemeToggle
