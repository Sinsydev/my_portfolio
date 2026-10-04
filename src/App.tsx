import { useEffect, useState } from 'react'
import SiteNavigation from './components/SiteNavigation'
import Hero from './sections/Hero'
import ProofBar from './sections/ProofBar'

type Theme = 'dark' | 'light'

function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    return savedTheme === 'light' ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('portfolio-theme', theme)
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      theme === 'dark' ? '#0b0d10' : '#f5f4f0',
    )
  }, [theme])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteNavigation
        theme={theme}
        onThemeToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />
      <main id="main-content" className="page-content">
        <Hero />
        <ProofBar />
      </main>
    </div>
  )
}

export default App