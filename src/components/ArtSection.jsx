import FadeIn from './FadeIn'
import { art } from '../data/items'
import { motion } from 'framer-motion'

function ArtCard({ item, index }) {
  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        style={{
          border: '1px solid var(--border)',
          borderRadius: '4px',
          overflow: 'hidden',
          cursor: 'default',
          background: 'var(--surface)',
        }}
      >
        {/* image area */}
        <div
          style={{
            aspectRatio: '4/3',
            background: item.placeholder,
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {item.src ? (
            <img
              src={item.src}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
                [ image ]
              </span>
            </div>
          )}
        </div>

        {/* caption */}
        <div style={{ padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', color: 'var(--text)' }}>{item.title}</span>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{item.year}</span>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function ArtSection() {
  return (
    <section id="art" style={{ padding: '6rem 2.5rem' }}>
      <FadeIn>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'var(--text)' }}>
            Art
          </h2>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            {art.length} pieces
          </span>
        </div>
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {art.map((item, i) => (
          <ArtCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
