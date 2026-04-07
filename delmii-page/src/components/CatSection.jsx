import FadeIn from './FadeIn'
import { cats } from '../data/items'
import { motion } from 'framer-motion'

function CatCard({ item, index }) {
  return (
    <FadeIn delay={index * 0.07}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        style={{
          border: '1px solid var(--border)',
          borderRadius: '4px',
          overflow: 'hidden',
          background: 'var(--surface)',
          position: 'relative',
        }}
      >
        <div style={{ aspectRatio: '1/1', background: item.placeholder, position: 'relative', overflow: 'hidden' }}>
          {item.src ? (
            <img
              src={item.src}
              alt={item.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          ) : (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>[ cat ]</span>
            </div>
          )}

          {/* caption overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(14,14,14,0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text)', fontStyle: 'italic' }}>
              {item.title}
            </span>
          </motion.div>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function CatSection() {
  return (
    <section id="cat" style={{ padding: '6rem 2.5rem' }}>
      <FadeIn>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'var(--text)' }}>
            Cat
          </h2>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
            the important section
          </span>
        </div>
      </FadeIn>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
        {cats.map((item, i) => (
          <CatCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
