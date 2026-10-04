import { skillGroups } from '../data/skills'

const groupDescriptions: Record<string, string> = {
  'Product Engineering': 'Interfaces and application structure shaped around clear product workflows.',
  'AI & Voice': 'AI APIs and communication services connected to useful user-facing flows.',
  'Real-Time Systems': 'Authentication, live data, and dashboards built on Firebase services.',
  'APIs & Backend': 'Service integration and backend fundamentals for connected applications.',
  'Engineering Quality': 'Performance, accessibility, testing, and maintainability across the product.',
}

function Engineering() {
  return (
    <section id="engineering" className="content-section engineering-section" aria-labelledby="engineering-title">
      <div className="section-header">
        <div>
          <p className="eyebrow"><span>02</span> Engineering</p>
          <h2 id="engineering-title">A practical range, connected by product thinking.</h2>
        </div>
        <p className="section-intro">Capabilities grounded in the tools and systems used across the work.</p>
      </div>
      <div className="capability-grid">
        {skillGroups.map((group, index) => (
          <article className="capability-card" key={group.name}>
            <p className="capability-index">0{index + 1}</p>
            <h3>{group.name}</h3>
            <p className="capability-description">{groupDescriptions[group.name]}</p>
            <ul className="capability-skills">
              {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Engineering