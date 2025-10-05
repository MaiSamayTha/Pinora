import Link from 'next/link'

const heroHighlights = [
  'Organize collections by mood or project',
  'Share tidy bundles with a single link',
  'Keep collaborators aligned without extra tools',
]

export default function HomePage() {
  return (
    <section className="hero">
      <header className="hero-header">
        <span className="hero-tag">Link curation, simplified</span>
        <h1 className="hero-title">Pinora keeps every link pile clear and tidy</h1>
        <p className="hero-subtitle">
          Curate, structure, and revisit your favorite corners of the web without losing the thread. Designed for thoughtful collectors and teams.
        </p>
      </header>
      <ul className="hero-list">
        {heroHighlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="hero-actions">
        <Link className="hero-link" href="/dashboard">
          Open dashboard
        </Link>
        <span className="hero-note">Preview arriving soon.</span>
      </div>
    </section>
  )
}
