import React from 'react'

export default function SkillsList({ items }: { items: any[] }) {
  if (!items || items.length === 0) return <p>No skills yet.</p>
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {items.map(s => (
          <li key={s.id}>{s.name} ({s.percentage}%)</li>
        ))}
      </ul>
    </section>
  )
}
