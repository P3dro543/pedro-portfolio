import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang }  from '../context/LangContext'
import { data }     from '../data/content'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.5, ease: 'easeOut', delay },
})

export default function Hero({ onNav }) {
  const { t } = useTheme()
  const { tr } = useLang()

  return (
    <section style={{ padding: '48px 24px 40px' }}>

      {/* Grid — columnas en desktop, columna en móvil */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '40px',
        alignItems: 'center',
      }}>

        {/* LEFT */}
        <div>
          <motion.p {...fadeUp(0.1)} style={{ fontSize: '13px', color: t.muted, marginBottom: '20px', transition: 'color 0.3s ease' }}>
            {tr.role} · {tr.location}
          </motion.p>

          <motion.h1
            {...fadeUp(0.2)}
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: 'clamp(36px, 8vw, 52px)',
              lineHeight: 1.08,
              letterSpacing: '-0.5px',
              color: t.ink,
              marginBottom: '18px',
              transition: 'color 0.3s ease',
            }}
          >
            {tr.headline[0]}<br />
            <em style={{ color: t.muted, fontStyle: 'italic', transition: 'color 0.3s ease' }}>
              {tr.headline[1]}
            </em>
          </motion.h1>

          <motion.p
            {...fadeUp(0.3)}
            style={{ fontSize: '15px', color: t.muted, lineHeight: 1.75, marginBottom: '32px', transition: 'color 0.3s ease' }}
          >
            {tr.bio[0]}
            <strong style={{ color: t.ink, fontWeight: 500, transition: 'color 0.3s ease' }}>
              {tr.bio[1]}
            </strong>
            {tr.bio[2]}
          </motion.p>

          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <button
              onClick={() => onNav('work')}
              style={{
                padding: '10px 22px',
                backgroundColor: t.ink,
                color: t.bg,
                border: 'none',
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.3s ease',
              }}
            >
              {tr.cta1}
            </button>
            <button
              onClick={() => onNav('contact')}
              style={{
                padding: '10px 22px',
                backgroundColor: 'transparent',
                color: t.ink,
                border: `1px solid ${t.border}`,
                borderRadius: '100px',
                fontSize: '13px',
                fontWeight: 400,
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.3s ease',
              }}
            >
              {tr.cta2}
            </button>
          </motion.div>
        </div>

        {/* RIGHT — foto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          style={{ position: 'relative', justifySelf: 'center' }}
        >
          <div style={{
            position: 'absolute',
            inset: 0,
            transform: 'translate(8px, 8px)',
            borderRadius: '20px',
            border: `1px solid ${t.border}`,
            zIndex: 0,
            transition: 'border-color 0.3s ease',
          }} />

          <div style={{
            position: 'relative',
            width: '200px',
            height: '260px',
            borderRadius: '20px',
            overflow: 'hidden',
            zIndex: 1,
            backgroundColor: t.bg2,
            transition: 'background-color 0.3s ease',
          }}>
            <img
              src="/photo.jpg"
              alt="Pedro Romero"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.5 }}
            style={{
              position: 'absolute',
              bottom: '-14px',
              left: '-16px',
              backgroundColor: t.bg2,
              border: `1px solid ${t.border}`,
              borderRadius: '12px',
              padding: '8px 12px',
              zIndex: 2,
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ display: 'inline-block', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulse 2.5s ease infinite', flexShrink: 0 }} />
            <span style={{ fontSize: '11px', color: t.ink, fontWeight: 500, whiteSpace: 'nowrap', transition: 'color 0.3s ease' }}>
              {tr.available} for work
            </span>
          </motion.div>
        </motion.div>

      </div>

      {/* Stats */}
      <motion.div
        {...fadeUp(0.5)}
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          borderTop: `1px solid ${t.border}`,
          marginTop: '48px',
          transition: 'border-color 0.3s ease',
        }}
      >
        {tr.stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: '18px 0',
              paddingLeft: i > 0 ? '16px' : '0',
              borderRight: i < 2 ? `1px solid ${t.border}` : 'none',
              paddingRight: i < 2 ? '16px' : '0',
              transition: 'border-color 0.3s ease',
            }}
          >
            <p style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(24px, 5vw, 34px)', color: t.ink, letterSpacing: '-0.5px', transition: 'color 0.3s ease' }}>
              {stat.value}
            </p>
            <p style={{ fontSize: '11px', color: t.muted, marginTop: '3px', transition: 'color 0.3s ease' }}>
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
    </section>
  )
}