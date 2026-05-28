import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang }  from '../context/LangContext'
import { data }     from '../data/content'

const container = {
  animate: { transition: { staggerChildren: 0.08 } },
}

const item = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function Work() {
  const { t }        = useTheme()
  const { tr, lang } = useLang()

  return (
    <section style={{ padding: '56px 36px 48px' }}>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '32px' }}
      >
        <h2 style={{ fontFamily: "'DM Serif Display', serif", fontSize: '30px', color: t.ink, letterSpacing: '-0.3px', transition: 'color 0.3s ease' }}>
          {tr.workTitle}
        </h2>
        <span style={{ fontSize: '12px', color: t.hint, transition: 'color 0.3s ease' }}>
          {String(data.projects.length).padStart(2, '0')} {tr.projects}
        </span>
      </motion.div>

      <motion.div variants={container} initial="initial" animate="animate">
        {data.projects.map((project) => (
          <motion.div
            key={project.index}
            variants={item}
            style={{
              display: 'grid',
              gridTemplateColumns: '40px 1fr 20px',
              gap: '20px',
              alignItems: 'start',
              padding: '22px 0',
              borderTop: `1px solid ${t.border}`,
              cursor: 'pointer',
              transition: 'opacity 0.2s, border-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.5'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            <span style={{ fontSize: '12px', color: t.hint, paddingTop: '2px', transition: 'color 0.3s ease' }}>
              {project.index}
            </span>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 500, color: t.ink, marginBottom: '6px', letterSpacing: '-0.1px', transition: 'color 0.3s ease' }}>
                {project.title}
              </h3>
              <p style={{ fontSize: '13px', color: t.muted, lineHeight: 1.65, marginBottom: '12px', transition: 'color 0.3s ease' }}>
                {project.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '11px',
                      padding: '3px 10px',
                      borderRadius: '100px',
                      border: `1px solid ${t.border}`,
                      color: t.muted,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <span style={{ fontSize: '16px', color: t.hint, paddingTop: '2px', transition: 'color 0.3s ease' }}>
              ↗
            </span>
          </motion.div>
        ))}
        <div style={{ borderBottom: `1px solid ${t.border}`, transition: 'border-color 0.3s ease' }} />
      </motion.div>

    </section>
  )
}