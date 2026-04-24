import { MoonStar, SunMedium } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/hooks/useTheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="rounded-full border-border/70 bg-background/70 px-3 text-foreground shadow-none backdrop-blur-sm"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <SunMedium className="size-4" /> : <MoonStar className="size-4" />}
      <span>{isDark ? 'Light' : 'Dark'}</span>
    </Button>
  )
}
