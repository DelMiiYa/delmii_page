import { motion } from 'framer-motion'

const links = [
  { label: 'art', href: '#art' },
  { label: 'projects', href: '#projects' },
  { label: 'cat', href: '#cat' },
]

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.5rem 2.5rem',
        borderBottom: '1px solid transparent',
        backdropFilter: 'blur(8px)',
      }}
    >
      <a
        href="#top"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: 'var(--text)',
          textDecoration: 'none',
          letterSpacing: '0.02em',
        }}
      >
        DelMii
      </a>

      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                fontSize: '0.75rem',
                color: 'var(--muted)',
                textDecoration: 'none',
                letterSpacing: '0.1em',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.nav>
  )
}
