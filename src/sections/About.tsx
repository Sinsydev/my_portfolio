import { education } from '../data/education'

const buildSteps = [
  { title: 'Understand', description: 'Clarify the real problem.' },
  { title: 'Design', description: 'Shape the architecture and user flow.' },
  { title: 'Build', description: 'Create maintainable components and systems.' },
  { title: 'Integrate', description: 'Connect APIs, data, and services.' },
  { title: 'Refine', description: 'Test usability, reliability, and performance.' },
  { title: 'Deploy', description: 'Ship, observe, and iterate.' },
]

function About() {
  return (
    <section id="about" className="content-section about-section" aria-labelledby="about-title">
      <div className="about-copy">
        <p className="eyebrow"><span>05</span> About</p>
        <h2 id="about-title">Software engineering, built around useful products.</h2>
        <p>
          I’m a Software Engineer from Nigeria focused on building useful products at the
          intersection of software, AI, real-time systems, and user experience.
        </p>
        <p>
          I work across modern web applications, AI and voice workflows, APIs, and real-time
          systems, with attention to responsive interfaces and maintainable frontend architecture.
        </p>
        <div className="build-process" aria-labelledby="build-process-title">
          <h3 id="build-process-title">How I build</h3>
          <ol>
            {buildSteps.map((step, index) => (
              <li key={step.title}>
                <span className="build-process__index">0{index + 1}</span>
                <strong>{step.title}</strong>
                <span>{step.description}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <div className="education-records">
        {education.map((item) => (
          <article className="education-record" key={item.qualification}>
            <span className="mono-label">Education</span>
            <h3>{item.qualification}</h3>
            {item.distinction && <p>{item.distinction}</p>}
            {item.cgpa && <strong>CGPA {item.cgpa}</strong>}
          </article>
        ))}
      </div>
    </section>
  )
}

export default About