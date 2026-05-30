import { useState } from 'react'
import { motion }   from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { useLang }  from '../context/LangContext'
import { data }     from '../data/content'

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true },
  transition:  { duration: 0.4, ease: 'easeOut', delay },
})

export default function Contact() {
  const { t }  = useTheme()
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
    padding: '10px 13px',
    borderRadius: '8px',
    border: `1px solid ${t.border}`,
    backgroundColor: t.bg,
    color: t.ink,
    fontSize: '13px',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition:
      'background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease',
  }

  return (
    <section
      style={{
        padding: '56px 24px 48px',
        position: 'relative',
      }}
    >
      {/* Header */}
      <motion.div
        {...fadeUp(0.05)}
        style={{
          marginBottom: '32px',
          maxWidth: '620px',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: t.hint,
            marginBottom: '10px',
            transition: 'color 0.3s ease',
          }}
        >
          {tr.contactLabel}
        </p>

        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 'clamp(28px, 7vw, 58px)',
            lineHeight: 1.1,
            letterSpacing: '-1px',
            color: t.ink,
            marginBottom: '12px',
            transition: 'color 0.3s ease',
          }}
        >
          {tr.contactTitle[0]}
          <br />
          {tr.contactTitle[1]}
        </h2>

        <p
          style={{
            fontSize: '14px',
            lineHeight: 1.7,
            color: t.muted,
            maxWidth: '420px',
            transition: 'color 0.3s ease',
          }}
        >
          {tr.contactBody}
        </p>
      </motion.div>

      {/* Layout */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns:
            'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}
      >
        {/* Contact Cards */}
        <motion.div
          {...fadeUp(0.1)}
          style={{
            display: 'grid',
            gap: '10px',
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
                gap: '12px',
                padding: '14px 16px',
                borderRadius: '14px',
                backgroundColor: t.bg2,
                border: `1px solid ${t.border}`,
                textDecoration: 'none',
                transition:
                  'border-color 0.25s ease, background-color 0.3s ease, transform 0.25s ease',
                cursor: link.href ? 'pointer' : 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  'translateY(-2px)'
                e.currentTarget.style.borderColor = t.muted
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  'translateY(0px)'
                e.currentTarget.style.borderColor = t.border
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: t.bg,
                  border: `1px solid ${t.border}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: t.ink,
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                }}
              >
                <i
                  className={`ti ${link.icon}`}
                  style={{ fontSize: '16px' }}
                />
              </div>

              <div style={{ minWidth: 0 }}>
                <p
                  style={{
                    fontSize: '11px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.7px',
                    color: t.hint,
                    marginBottom: '2px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {link.label}
                </p>

              <p
                onMouseEnter={() => {
                  if (link.label === 'Email') setShowEmail(true)
                }}
                onMouseLeave={() => {
                  if (link.label === 'Email') setShowEmail(false)
                }}
                style={{
                  fontSize: '13px',
                  color: t.ink,
                  fontWeight: 500,
                  lineHeight: 1.5,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.3s ease',
                  cursor: link.label === 'Email' ? 'pointer' : 'default',
                  filter:
                    link.label === 'Email' && !showEmail
                      ? 'blur(3px)'
                      : 'blur(0px)',
                }}
              >
                {link.label === 'Email'
                  ? showEmail
                    ? link.value
                    : 'Hover to reveal'
                  : link.value}
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
            borderRadius: '18px',
            padding: '24px',
            backdropFilter: 'blur(10px)',
            transition:
              'background-color 0.3s ease, border-color 0.3s ease',
          }}
        >
          {sent ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '32px 0',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: '#f0fdf4',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                }}
              >
                <i
                  className="ti ti-check"
                  style={{
                    fontSize: '20px',
                    color: '#22c55e',
                  }}
                />
              </div>

              <h3
                style={{
                  fontSize: '17px',
                  color: t.ink,
                  marginBottom: '6px',
                  transition: 'color 0.3s ease',
                }}
              >
                {tr.sentTitle}
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  color: t.muted,
                  maxWidth: '320px',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                  transition: 'color 0.3s ease',
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
                  fontSize: '12px',
                  textDecoration: 'underline',
                  transition: 'color 0.3s ease',
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
                gap: '14px',
              }}
            >
              {/* Name + Email */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '14px',
                }}
              >
                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '11px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.7px',
                      color: t.hint,
                      marginBottom: '6px',
                      transition: 'color 0.3s ease',
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
                      letterSpacing: '0.7px',
                      color: t.hint,
                      marginBottom: '6px',
                      transition: 'color 0.3s ease',
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
                    letterSpacing: '0.7px',
                    color: t.hint,
                    marginBottom: '6px',
                    transition: 'color 0.3s ease',
                  }}
                >
                  {tr.msgLabel}
                </label>

                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder={tr.msgPh}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                  }}
                />
              </div>

              <div>
                <button
                  onClick={handleSubmit}
                  style={{
                    width: 'fit-content',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 22px',
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
                    e.currentTarget.style.transform =
                      'translateY(-2px)'
                    e.currentTarget.style.opacity = '0.92'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform =
                      'translateY(0px)'
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  <i className="ti ti-arrow-up-right" />
                  {tr.sendBtn}
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}