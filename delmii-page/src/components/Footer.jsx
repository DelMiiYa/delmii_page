import FadeIn from './FadeIn'

export default function Footer() {
  return (
    <FadeIn>
      <footer
        style={{
          padding: '3rem 2.5rem',
          borderTop: '1px solid var(--border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--muted)' }}>
          DelMii
        </span>
        <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
          still empty — {new Date().getFullYear()}
        </span>
      </footer>
    </FadeIn>
  )
}
