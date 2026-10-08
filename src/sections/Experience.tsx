import { experience } from '../data/experience'
import { projects } from '../data/projects'

function Experience() {
  return (
    <section id="experience" className="content-section experience-section" aria-labelledby="experience-title">
      <div className="section-header">
        <div>
          <p className="eyebrow"><span>03</span> Experience</p>
          <h2 id="experience-title">Selected product engineering work.</h2>
        </div>
      </div>
      <div className="timeline">
        {experience.map((item, index) => {
          const relatedProject = projects.find((project) => project.title === item.title)

          return (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-marker">
                <span>0{index + 1}</span>
                <i aria-hidden="true" />
              </div>
              <div className="timeline-content">
                <p className="timeline-period">Project experience</p>
                <h3>{item.title}</h3>
                <p className="timeline-summary">{item.summary}</p>
                <ul className="experience-highlights">
                  {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                {item.stack && item.stack.length > 0 && (
                  <ul className="stack-list" aria-label={`${item.title} technology stack`}>
                    {item.stack.map((technology) => <li key={technology}>{technology}</li>)}
                  </ul>
                )}
                {relatedProject?.github && (
                  <a
                    className="experience-case-link"
                    href={relatedProject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View GitHub repository <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Experience