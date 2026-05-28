import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import { data } from '../data/content'

export default function Footer() {
  const { t } = useTheme()
  const { tr } = useLang()

  const links = [
    {
      label: 'GitHub',
      href: `https://${data.contact.github}`,
      icon: 'ti-brand-github',
    },
    {
      label: 'LinkedIn',
      href: `https://${data.contact.linkedin}`,
      icon: 'ti-brand-linkedin',
    },
    {
      label: 'Email',
      href: `mailto:${data.contact.email}`,
      icon: 'ti-mail',
    },
  ]

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        borderTop: `1px solid ${t.border}`,
        padding: '28px 36px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: '768px',
        margin: '0 auto',
        transition: 'border-color 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <span
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: '15px',
            color: t.ink,
            transition: 'color 0.3s ease',
          }}
        >
          {data.name}
        </span>

        <span
          style={{
            fontSize: '11px',
            color: t.hint,
            transition: 'color 0.3s ease',
          }}
        >
          © {new Date().getFullYear()} · {tr.role}
        </span>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noreferrer"
            title={link.label}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              border: `1px solid ${t.border}`,
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: t.muted,
              textDecoration: 'none',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = t.ink
              e.currentTarget.style.color = t.ink
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = t.border
              e.currentTarget.style.color = t.muted
            }}
          >
            <i
              className={`ti ${link.icon}`}
              style={{ fontSize: '15px' }}
              aria-hidden="true"
            />
          </a>
        ))}
      </div>

      <span
        style={{
          fontSize: '11px',
          color: t.hint,
          letterSpacing: '0.3px',
          transition: 'color 0.3s ease',
        }}
      >
        San José, Costa Rica
      </span>
    </motion.footer>
  )
}