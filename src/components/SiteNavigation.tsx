import { useState } from 'react'
import ThemeToggle from './ThemeToggle'

type SiteNavigationProps = {
  theme: 'dark' | 'light'
  onThemeToggle: () => void
}

const navigationLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

function SiteNavigation({ theme, onThemeToggle }: SiteNavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="topbar">
      <a className="brand" href="#main-content" aria-label="Ismail Aminu Said, home">
        <span className="brand-mark" aria-hidden="true">I</span>
        <span>Ismail Aminu Said</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
      </button>

      <nav
        id="primary-navigation"
        className={`nav${menuOpen ? ' nav--open' : ''}`}
        aria-label="Primary navigation"
      >
        {navigationLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <ThemeToggle theme={theme} onToggle={onThemeToggle} />
      </nav>
    </header>
  )
}

export default SiteNavigation