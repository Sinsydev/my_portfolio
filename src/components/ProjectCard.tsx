import type { Project } from '../data/types'
import Waveform from './Waveform'

type ProjectCardProps = {
  project: Project
  featuredIndex?: number
  projectNumber?: number
  compact?: boolean
  onViewCaseStudy?: (project: Project) => void
}

function ProjectCard({ project, featuredIndex, projectNumber, compact = false, onViewCaseStudy }: ProjectCardProps) {
  const isPrimary = !compact && featuredIndex === 0
  const caseNumber = projectNumber ?? (featuredIndex ?? 0) + 1

  return (
    <article className={`project-card${isPrimary ? ' project-card--primary' : ''}${compact ? ' project-card--compact' : ''}`}>
      {!compact && (
        <div className={`project-visual${isPrimary ? ' project-visual--signal' : ' project-visual--operations'}`} aria-hidden="true">
          <div className="project-visual__topline">
            <span>CASE / {String(caseNumber).padStart(2, '0')}</span>
            <span className="project-visual__status"><i /> System map</span>
          </div>
          {isPrimary ? (
            <>
              <div className="project-signal-label">Conversation <span>→</span> Action</div>
              <Waveform className="project-waveform" />
              <div className="project-flow" aria-hidden="true">
                <span>Voice</span><b /> <span>AI</span><b /> <span>Workflow</span>
              </div>
            </>
          ) : (
            <div className="operations-visual__flow">
              <span>Incident report</span>
              <b aria-hidden="true" />
              <span>Live visibility</span>
            </div>
          )}
        </div>
      )}

      <div className="project-content">
        {compact && <span className="project-number">PROJECT / {String(caseNumber).padStart(2, '0')}</span>}
        <p className="project-category">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {project.problem && <p className="project-detail"><strong>Problem</strong>{project.problem}</p>}
        {project.approach && <p className="project-detail"><strong>Approach</strong>{project.approach}</p>}
        {project.impact && <p className="project-detail"><strong>Impact</strong>{project.impact}</p>}

        {project.architecture && project.architecture.length > 0 && (
          <div className="project-architecture">
            <span className="mono-label">Architecture</span>
            <ol>
              {project.architecture.map((step) => <li key={step}>{step}</li>)}
            </ol>
          </div>
        )}

        {project.stack.length > 0 && (
          <ul className="stack-list" aria-label={`${project.title} technology stack`}>
            {project.stack.map((stackItem) => <li key={stackItem}>{stackItem}</li>)}
          </ul>
        )}

        {(project.live || project.github || (project.caseStudy && onViewCaseStudy)) && (
          <div className="project-links">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer">View product <span aria-hidden="true">↗</span></a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">Source code <span aria-hidden="true">↗</span></a>}
            {project.caseStudy && onViewCaseStudy && (
              <button type="button" onClick={() => onViewCaseStudy(project)}>
                View case study <span aria-hidden="true">↗</span>
              </button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard