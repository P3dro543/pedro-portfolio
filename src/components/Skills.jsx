import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import { data } from '../data/content'

const container = {
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const item = {
  initial: {
    opacity: 0,
    y: 18,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

function LevelDots({ level }) {
  const { t } = useTheme()
  const { lang } = useLang()

  const configs = {
    Advanced: {
      label: lang === 'es' ? 'Avanzado' : 'Advanced',
      color: t.ink,
      bg: t.bg2, // Mantiene consistencia dinámica con el tema
      dots: 3,
    },
    Intermediate: {
      label: lang === 'es' ? 'Intermedio' : 'Intermediate',
      color: t.muted,
      bg: t.bg2,
      dots: 2,
    },
    Beginner: {
      label: lang === 'es' ? 'Principiante' : 'Beginner',
      color: t.hint,
      bg: t.bg2,
      dots: 1,
    },
  }

  const config = configs[level] ?? configs.Beginner

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '4px',
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '999px',
              backgroundColor: i <= config.dots ? config.color : t.border,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>

      <span
        style={{
          fontSize: '10px',
          color: config.color,
          backgroundColor: config.bg,
          border: `1px solid ${t.border}`,
          padding: '4px 9px',
          borderRadius: '999px',
          letterSpacing: '0.3px',
          fontWeight: 500,
          lineHeight: 1,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
        }}
      >
        {config.label}
      </span>
    </div>
  )
}

export default function Skills() {
  const { t } = useTheme()
  const { tr, lang } = useLang()

  const total = data.skills.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  )

  const legendItems = [
    { label: lang === 'es' ? 'Avanzado' : 'Advanced', dots: 3, color: t.ink },
    { label: lang === 'es' ? 'Intermedio' : 'Intermediate', dots: 2, color: t.muted },
    { label: lang === 'es' ? 'Principiante' : 'Beginner', dots: 1, color: t.hint },
  ]

  return (
    <section
      style={{
        padding: '72px 36px 60px',
        position: 'relative',
      }}
    >
      {/* Background glow (Restaurado del primer archivo) */}
      <div
        style={{
          position: 'absolute',
          top: '80px',
          right: '-120px',
          width: '280px',
          height: '280px',
          borderRadius: '999px',
          background:
            'radial-gradient(circle, rgba(15,15,14,0.06) 0%, rgba(15,15,14,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '36px',
          position: 'relative',
          zIndex: 2, // Restaurado del primer archivo
        }}
      >
        <div>
          <p
            style={{
              fontSize: '11px',
              color: t.hint,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              marginBottom: '10px',
              transition: 'color 0.3s ease',
            }}
          >
            {lang === 'es' ? 'Experiencia' : 'Expertise'}
          </p>

          <h2
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: '34px',
              color: t.ink,
              letterSpacing: '-0.6px',
              lineHeight: 1.05,
              transition: 'color 0.3s ease',
            }}
          >
            {lang === 'es' ? (
              <>
                Capacidades
                <br />
                técnicas
              </>
            ) : (
              <>
                Technical
                <br />
                capabilities
              </>
            )}
          </h2>
        </div>

        <div
          style={{
            textAlign: 'right',
          }}
        >
          <p
            style={{
              fontSize: '28px',
              color: t.ink,
              fontWeight: 600,
              lineHeight: 1,
              transition: 'color 0.3s ease',
            }}
          >
            {total}
          </p>

          <span
            style={{
              fontSize: '11px',
              color: t.hint,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              transition: 'color 0.3s ease',
            }}
          >
            {tr.technologies}
          </span>
        </div>
      </motion.div>

      {/* Legend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.4,
          delay: 0.1,
        }}
        style={{
          display: 'flex',
          gap: '18px',
          marginBottom: '28px',
          flexWrap: 'wrap',
        }}
      >
        {legendItems.map((cfg) => (
          <div
            key={cfg.label}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '7px',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '4px',
              }}
            >
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '999px',
                    backgroundColor: i <= cfg.dots ? cfg.color : t.border,
                    transition: 'background-color 0.3s ease',
                  }}
                />
              ))}
            </div>

            <span
              style={{
                fontSize: '11px',
                color: t.muted,
                letterSpacing: '0.2px',
                transition: 'color 0.3s ease',
              }}
            >
              {cfg.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="initial"
        animate="animate"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '14px',
          position: 'relative', // Restaurado del primer archivo
          zIndex: 2, // Restaurado del primer archivo
        }}
      >
        {data.skills.map((cat) => (
          <motion.div
            key={cat.category}
            variants={item}
            whileHover={{
              y: -4,
            }}
            style={{
              backgroundColor: t.bg2,
              border: `1px solid ${t.border}`,
              borderRadius: '18px',
              padding: '26px',
              backdropFilter: 'blur(16px)', // Restaurado del primer archivo
              boxShadow:
                '0 1px 2px rgba(0,0,0,0.02), 0 10px 30px rgba(0,0,0,0.03)',
              transition: 'all 0.25s ease',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '22px',
              }}
            >
              <p
                style={{
                  fontSize: '11px',
                  color: t.hint,
                  textTransform: 'uppercase',
                  letterSpacing: '1.1px',
                  transition: 'color 0.3s ease',
                }}
              >
                {cat.category}
              </p>

              <span
                style={{
                  fontSize: '11px',
                  color: t.hint,
                  transition: 'color 0.3s ease',
                }}
              >
                {cat.items.length} skills
              </span>
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}
            >
              {cat.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom:
                      index !== cat.items.length - 1 ? '14px' : 0,
                    borderBottom:
                      index !== cat.items.length - 1
                        ? `1px solid ${t.border}`
                        : 'none',
                    transition: 'border-color 0.3s ease',
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: t.ink,
                        marginBottom: '3px',
                        letterSpacing: '-0.1px',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {skill.name}
                    </p>

                    {/* Texto descriptivo del nivel del skill (Restaurado del primer archivo) */}
                    <span
                      style={{
                        fontSize: '11px',
                        color: t.hint,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <LevelDots level={skill.level} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}