import Link from 'next/link'

export default function HomePage() {
  return (
    <section className="hero">
      <h1 className="hero-title">Pinora</h1>
      <p className="hero-subtitle">Save and share beautiful link piles</p>
      <Link className="hero-link" href="/dashboard">
        Go to dashboard ->
      </Link>
    </section>
  )
}
