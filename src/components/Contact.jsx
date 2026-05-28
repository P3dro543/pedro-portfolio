import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang } from '../context/LangContext'
import { data } from '../data/content'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.45,
    ease: 'easeOut',
    delay,
  },
})

export default function Contact() {
  const { t } = useTheme()
  const { tr } = useLang()

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const links = [
    {
      label: 'GitHub',
      value: data.contact.github,
      icon: 'ti-brand-github',
      href: `https://${data.contact.github}`,
    },
    {
      label: 'LinkedIn',
      value: data.contact.linkedin,
      icon: 'ti-brand-linkedin',
      href: `https://${data.contact.linkedin}`,
    },
    {
      label: 'Email',
      value: data.contact.email,
      icon: 'ti-mail',
      href: `mailto:${data.contact.email}`,
    },
    {
      label: 'Location',
      value: data.location,
      icon: 'ti-map-pin',
      href: null,
    },
  ]

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit() {
    if (!form.name || !form.email || !form.message) return
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    borderRadius: '12px',
    border: `1px solid ${t.border}`,
    backgroundColor: t.bg,
    color: t.ink,
    fontSize: '13px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'all 0.3s ease',
  }

  return (
    <section
      style={{
        padding: '72px 36px',
        position: 'relative',
      }}
    >
      {/* Header */}
      <motion.div
        {...fadeUp(0)}
        style={{
          marginBottom: '40px',
          maxWidth: '620px',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '1.4px',
            color: t.hint,
            marginBottom: '14px',
          }}
        >
          {tr.contactLabel}
        </p>

        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(38px, 6vw, 58px)',
            lineHeight: 1.05,
            letterSpacing: '-2px',
            color: t.ink,
            marginBottom: '18px',
          }}
        >
          {tr.contactTitle[0]}
          <br />
          {tr.contactTitle[1]}
        </h2>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.8,
            color: t.muted,
            maxWidth: '520px',
          }}
        >
          {tr.contactBody}
        </p>
      </motion.div>

      {/* Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '22px',
        }}
      >
        {/* Contact Cards */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            display: 'grid',
            gap: '12px',
            alignSelf: 'start',
          }}
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href || undefined}
              target={
                link.href && !link.href.startsWith('mailto')
                  ? '_blank'
                  : undefined
              }
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '18px',
                borderRadius: '18px',
                backgroundColor: t.bg2,
                border: `1px solid ${t.border}`,
                textDecoration: 'none',
                transition: 'all 0.25s ease',
                cursor: link.href ? 'pointer' : 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = t.muted
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)'
                e.currentTarget.style.borderColor = t.border
              }}
            >
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  backgroundColor: t.bg,
                  border: `1px solid ${t.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: t.ink,
                  flexShrink: 0,
                }}
              >
                <i
                  className={`ti ${link.icon}`}
                  style={{ fontSize: '19px' }}
                />
              </div>

              <div>
                <p
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: t.hint,
                    marginBottom: '4px',
                  }}
                >
                  {link.label}
                </p>

                <p
                  style={{
                    fontSize: '14px',
                    color: t.ink,
                    fontWeight: 500,
                    lineHeight: 1.5,
                    wordBreak: 'break-word',
                  }}
                >
                  {link.value}
                </p>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Form */}
        <motion.div
          {...fadeUp(0.15)}
          style={{
            backgroundColor: t.bg2,
            border: `1px solid ${t.border}`,
            borderRadius: '26px',
            padding: '28px',
            backdropFilter: 'blur(10px)',
          }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '50px 0',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  backgroundColor: '#ecfdf3',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '18px',
                }}
              >
                <i
                  className="ti ti-check"
                  style={{
                    fontSize: '28px',
                    color: '#22c55e',
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: '20px',
                  color: t.ink,
                  marginBottom: '8px',
                }}
              >
                {tr.sentTitle}
              </h3>

              <p
                style={{
                  fontSize: '14px',
                  color: t.muted,
                  maxWidth: '320px',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}
              >
                {tr.sentBody}
              </p>

              <button
                onClick={() => {
                  setSent(false)
                  setForm({
                    name: '',
                    email: '',
                    message: '',
                  })
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: t.muted,
                  cursor: 'pointer',
                  fontSize: '13px',
                  textDecoration: 'underline',
                }}
              >
                {tr.sendAnother}
              </button>
            </motion.div>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
              }}
            >
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '14px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: t.hint,
                      marginBottom: '7px',
                    }}
                  >
                    {tr.nameLabel}
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={tr.namePh}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      color: t.hint,
                      marginBottom: '7px',
                    }}
                  >
                    {tr.emailLabel}
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={tr.emailPh}
                    style={inputStyle}
                  />
                </div>
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: t.hint,
                    marginBottom: '7px',
                  }}
                >
                  {tr.msgLabel}
                </label>

                <textarea
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={tr.msgPh}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                  }}
                />
              </div>

              <button
                onClick={handleSubmit}
                style={{
                  width: 'fit-content',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '13px 22px',
                  borderRadius: '999px',
                  border: 'none',
                  backgroundColor: t.ink,
                  color: t.bg,
                  cursor: 'pointer',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.opacity = '0.9'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)'
                  e.currentTarget.style.opacity = '1'
                }}
              >
                <i className="ti ti-arrow-up-right" />
                {tr.sendBtn}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}