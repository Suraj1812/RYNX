import { HiMoon, HiSun } from 'react-icons/hi'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <span className="theme-toggle__icon">
        {isDark ? <HiSun className="theme-icon" /> : <HiMoon className="theme-icon" />}
      </span>
      <span className="theme-toggle__label">{isDark ? 'Light' : 'Dark'}</span>
    </button>
  )
}
