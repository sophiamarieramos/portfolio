import React from 'react'

export default function PortfolioList({ items }: { items: any[] }) {
  if (!items || items.length === 0) return <p>No projects yet.</p>
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {items.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong> — {p.category}
          </li>
        ))}
      </ul>
    </section>
  )
}
