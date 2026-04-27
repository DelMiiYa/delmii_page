import FadeIn from './FadeIn'
import { projects } from '../data/items'
import { motion } from 'framer-motion'

function ProjectCard({ item, index }) {
  return (
    <FadeIn delay={index * 0.1}>
      <motion.a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 6 }}
        transition={{ duration: 0.25 }}
        style={{
          display: 'block',
          padding: '1.5rem',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          textDecoration: 'none',
          background: 'var(--surface)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* hover accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'var(--accent)',
            transformOrigin: 'top',
          }}
        />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text)', fontWeight: 400 }}>
            {item.title}
          </span>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{item.year}</span>
        </div>

        <p style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
          {item.desc}
        </p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {item.stack.map(tag => (
            <span
              key={tag}
              style={{
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: 'var(--accent)',
                border: '1px solid var(--border)',
                padding: '2px 8px',
                borderRadius: '2px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </motion.a>
    </FadeIn>
  )
}

export default function ProjectsSection() {
  return (
    <section id="projects" style={{ padding: '6rem 2.5rem' }}>
      <FadeIn>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'var(--text)' }}>
            Projects
          </h2>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            {projects.length} things
          </span>
        </div>
      </FadeIn>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {projects.map((item, i) => (
          <ProjectCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
