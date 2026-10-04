import { useEffect, useRef } from 'react'
import type { Project } from '../data/types'

type CaseStudyDialogProps = {
  project: Project | null
  onClose: () => void
}

function CaseStudyDialog({ project, onClose }: CaseStudyDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!project || !dialog) return

    const previousActiveElement = dialog.ownerDocument.activeElement
    dialog.showModal()
    closeButtonRef.current?.focus()

    return () => {
      if (dialog.open) dialog.close()
      if (previousActiveElement instanceof HTMLElement) previousActiveElement.focus()
    }
  }, [project])

  if (!project) return null

  const closeFromBackdrop = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onClose()
  }

  return (
    <dialog
      ref={dialogRef}
      className="case-study-dialog"
      aria-labelledby="case-study-title"
      onCancel={onClose}
      onClick={closeFromBackdrop}
    >
      <article className="case-study-document">
        <header className="case-study-header">
          <div>
            <p className="eyebrow">Engineering case study</p>
            <p className="project-category">{project.category}</p>
          </div>
          <button
            ref={closeButtonRef}
            className="case-study-close"
            type="button"
            onClick={onClose}
            aria-label="Close case study"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <h2 id="case-study-title">{project.title}</h2>

        <div className="case-study-sections">
          <section aria-labelledby="case-study-overview">
            <h3 id="case-study-overview">Overview</h3>
            <p className="case-study-overview">{project.summary}</p>
          </section>

          {project.problem && (
            <section aria-labelledby="case-study-problem">
              <h3 id="case-study-problem">Problem</h3>
              <p>{project.problem}</p>
            </section>
          )}

          {project.approach && (
            <section aria-labelledby="case-study-approach">
              <h3 id="case-study-approach">Approach</h3>
              <p>{project.approach}</p>
            </section>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <section aria-labelledby="case-study-architecture">
              <h3 id="case-study-architecture">System flow</h3>
              <ol className="case-study-flow">
                {project.architecture.map((step, index) => (
                  <li key={`${step}-${index}`}>
                    <span className="case-study-flow__index">{String(index + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          )}

          {project.engineeringHighlights && project.engineeringHighlights.length > 0 && (
            <section aria-labelledby="case-study-engineering">
              <h3 id="case-study-engineering">Engineering</h3>
              <ul className="case-study-list">
                {project.engineeringHighlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </section>
          )}

          {project.technicalDetails && project.technicalDetails.length > 0 && (
            <section aria-labelledby="case-study-technical-details">
              <h3 id="case-study-technical-details">Technical details</h3>
              <ul className="case-study-list">
                {project.technicalDetails.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section aria-labelledby="case-study-challenges">
              <h3 id="case-study-challenges">Challenges</h3>
              <ul className="case-study-list">
                {project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}
              </ul>
            </section>
          )}

          {project.impact && (
            <section aria-labelledby="case-study-impact">
              <h3 id="case-study-impact">Outcome</h3>
              <p>{project.impact}</p>
            </section>
          )}
        </div>

        <footer className="case-study-footer">
          {project.stack.length > 0 && (
            <ul className="stack-list" aria-label={`${project.title} technology stack`}>
              {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          )}
          <div className="case-study-actions">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project ↗</a>}
            {project.github && <a href={project.github} target="_blank" rel="noreferrer">Source code ↗</a>}
            <button type="button" className="case-study-back" onClick={onClose}>Back to projects</button>
          </div>
        </footer>
      </article>
    </dialog>
  )
}

export default CaseStudyDialog