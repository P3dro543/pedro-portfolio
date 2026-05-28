import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang }  from '../context/LangContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: 'easeOut', delay },
})

export default function About() {
  const { t }  = useTheme()
  const { tr } = useLang()

  const card = {
    backgroundColor: t.bg2,
    border: `1px solid ${t.border}`,
    borderRadius: '14px',
    padding: '24px',
    transition: 'background-color 0.3s ease, border-color 0.3s ease',
  }

  const label = {
    fontSize: '11px',
    color: t.hint,
    textTransform: 'uppercase',
    letterSpacing: '1px',
    marginBottom: '10px',
    transition: 'color 0.3s ease',
  }

  return (
    <section style={{ padding: '56px 36px 48px' }}>

      <motion.h2
        {...fadeUp(0.05)}
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: '30px',
          color: t.ink,
          letterSpacing: '-0.3px',
          marginBottom: '32px',
          transition: 'color 0.3s ease',
        }}
      >
        {tr.aboutTitle}
      </motion.h2>

      <motion.div
        {...fadeUp(0.1)}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}
      >
        <div style={card}>
          <p style={label}>{tr.profileLabel}</p>
          <h3 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '18px',
            color: t.ink,
            marginBottom: '10px',
            lineHeight: 1.3,
            transition: 'color 0.3s ease',
          }}>
            {tr.profileTitle}
          </h3>
          <p style={{ fontSize: '13px', color: t.muted, lineHeight: 1.7, transition: 'color 0.3s ease' }}>
            {tr.profileBody}
          </p>
        </div>

        <div style={card}>
          <p style={label}>{tr.currentLabel}</p>
          <h3 style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '18px',
            color: t.ink,
            marginBottom: '10px',
            lineHeight: 1.3,
            transition: 'color 0.3s ease',
          }}>
            {tr.currentTitle}
          </h3>
          <p style={{ fontSize: '13px', color: t.muted, lineHeight: 1.7, transition: 'color 0.3s ease' }}>
            {tr.currentBody}
          </p>
        </div>
      </motion.div>

      <motion.div {...fadeUp(0.15)} style={card}>
        <p style={label}>{tr.timelineLabel}</p>
        <div>
          {tr.timeline.map((item, i) => (
            <div
              key={i}
              style={{ display: 'flex', gap: '16px', paddingBottom: i < tr.timeline.length - 1 ? '20px' : '0' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '4px' }}>
                <div style={{
                  width: '7px', height: '7px',
                  borderRadius: '50%',
                  border: `1.5px solid ${t.ink}`,
                  flexShrink: 0,
                  transition: 'border-color 0.3s ease',
                }} />
                {i < tr.timeline.length - 1 && (
                  <div style={{
                    width: '1px', flex: 1,
                    backgroundColor: t.border,
                    marginTop: '6px',
                    transition: 'background-color 0.3s ease',
                  }} />
                )}
              </div>
              <div style={{ paddingBottom: i < tr.timeline.length - 1 ? '4px' : '0' }}>
                <p style={{ fontSize: '11px', color: t.hint, marginBottom: '3px', letterSpacing: '0.2px', transition: 'color 0.3s ease' }}>
                  {item.year}
                </p>
                <p style={{ fontSize: '14px', fontWeight: 500, color: t.ink, marginBottom: '4px', transition: 'color 0.3s ease' }}>
                  {item.title}
                </p>
                <p style={{ fontSize: '13px', color: t.muted, lineHeight: 1.6, transition: 'color 0.3s ease' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  )
}