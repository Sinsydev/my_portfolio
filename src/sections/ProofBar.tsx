const proofItems = [
  { label: 'Qualification', value: 'HND Software Engineering' },
  { label: 'Award', value: 'Distinction' },
  { label: 'CGPA', value: '4.6 / 5.0' },
  { label: 'Platform reach', value: '1,500+ active users' },
  { label: 'Focus', value: 'AI / Real-Time / Web Systems' },
]

function ProofBar() {
  return (
    <section className="proof-bar" aria-label="Portfolio proof and credentials">
      <ul className="proof-list">
        {proofItems.map((item) => (
          <li key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProofBar
