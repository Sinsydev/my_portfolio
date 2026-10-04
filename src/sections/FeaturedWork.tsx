import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

type FeaturedWorkProps = {
  onViewCaseStudy: (project: Project) => void
}

function FeaturedWork({ onViewCaseStudy }: FeaturedWorkProps) {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section id="work" className="section-block featured-work" aria-labelledby="work-title">
      <div className="section-header">
        <div>
          <p className="eyebrow"><span>01</span> Selected work</p>
          <h2 id="work-title">Products built around real interactions.</h2>
        </div>
        <p className="section-intro">A closer look at AI, voice, and real-time systems in practice.</p>
      </div>

      <div className="featured-grid">
        {featuredProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            featuredIndex={index}
            onViewCaseStudy={onViewCaseStudy}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturedWork