import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import FadeIn from './FadeIn'
import { writeups } from '../data/writeups'

const difficultyColor = {
  easy: '#6fcf97',
  medium: '#f2994a',
  hard: '#eb5757',
}

const categoryColors = {
  Web: '#56ccf2',
  Crypto: '#bb6bd9',
  Pwn: '#eb5757',
  Reverse: '#f2994a',
  Forensics: '#6fcf97',
  Misc: '#c8b89a',
  OSINT: '#2f80ed',
}

function WriteupCard({ item, index }) {
  const navigate = useNavigate()

  return (
    <FadeIn delay={index * 0.08}>
      <motion.div
        onClick={() => navigate(`/writeups/${item.id}`)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        style={{
          padding: '1.5rem',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          background: 'var(--surface)',
          cursor: 'pointer',
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem',
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '2px',
            background: categoryColors[item.category] || 'var(--accent)',
            transformOrigin: 'left',
          }}
        />

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <span style={{
            fontSize: '0.6rem',
            letterSpacing: '0.1em',
            color: categoryColors[item.category] || 'var(--accent)',
            border: `1px solid ${categoryColors[item.category] || 'var(--accent)'}`,
            padding: '2px 7px',
            borderRadius: '2px',
            opacity: 0.85,
          }}>
            {item.category}
          </span>
          <span style={{ fontSize: '0.6rem', color: difficultyColor[item.difficulty], letterSpacing: '0.05em' }}>
            ● {item.difficulty}
          </span>
        </div>

        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1rem',
          color: 'var(--text)',
          fontWeight: 400,
          lineHeight: 1.2,
        }}>
          {item.title}
        </span>

        <p style={{ fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.7, flex: 1 }}>
          {item.summary}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{item.ctf}</span>
          <span style={{ fontSize: '0.65rem', color: 'var(--muted)' }}>{item.year}</span>
        </div>
      </motion.div>
    </FadeIn>
  )
}

export default function WriteupsSection() {
  const navigate = useNavigate()

  return (
    <section id="writeups" style={{ padding: '6rem 2.5rem' }}>
      <FadeIn>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 400, color: 'var(--text)' }}>
              CTF Writeups
            </h2>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', letterSpacing: '0.1em' }}>
              {writeups.length} writeup{writeups.length !== 1 ? 's' : ''}
            </span>
          </div>
          <button
            onClick={() => navigate('/writeups')}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--muted)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              padding: 0,
              fontFamily: 'var(--font-mono)',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--text)'}
            onMouseLeave={e => e.target.style.color = 'var(--muted)'}
          >
            view all →
          </button>
        </div>
      </FadeIn>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {writeups.slice(0, 3).map((item, i) => (
          <WriteupCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
