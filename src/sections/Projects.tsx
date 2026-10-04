import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'
import type { Project } from '../data/types'

type ProjectsProps = {
  onViewCaseStudy: (project: Project) => void
}

function Projects({ onViewCaseStudy }: ProjectsProps) {
  const additionalProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="content-section projects-section" aria-labelledby="projects-title">
      <div className="section-header">
        <div>
          <p className="eyebrow"><span>04</span> More work</p>
          <h2 id="projects-title">Other products and engineering challenges.</h2>
        </div>
      </div>
      <div className="projects-grid">
        {additionalProjects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            projectNumber={index + 3}
            compact
            onViewCaseStudy={onViewCaseStudy}
          />
        ))}
      </div>
    </section>
  )
}

export default Projects