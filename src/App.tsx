import { useEffect, useState } from 'react'
import CaseStudyDialog from './components/CaseStudyDialog'
import SiteNavigation from './components/SiteNavigation'
import type { Project } from './data/types'
import Engineering from './sections/Engineering'
import Experience from './sections/Experience'
import FeaturedWork from './sections/FeaturedWork'
import Hero from './sections/Hero'
import ProofBar from './sections/ProofBar'

type Theme = 'dark' | 'light'

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
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
        <FeaturedWork onViewCaseStudy={setActiveProject} />
        <Engineering />
        <Experience onViewCaseStudy={setActiveProject} />
      </main>
      <CaseStudyDialog
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  )
}

export default App