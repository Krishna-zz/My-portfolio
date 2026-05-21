import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react'
import { toast } from 'sonner'

const socials = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/yourusername' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/yourusername' },
  { icon: Mail, label: 'Email', href: 'mailto:your@email.com' },
]

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.')
      return
    }
    setSending(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSending(false)
    toast.success('Message sent. I\'ll be in touch soon.')
    setForm({ name: '', email: '', message: '' })
  }

  const inputClass =
    'w-full bg-transparent border border-border px-4 py-3 font-mono text-sm text-text-primary placeholder:text-text-dim focus:outline-none focus:border-accent transition-colors duration-300'

  return (
    <section id="contact" className="py-32 section-padding" ref={ref}>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs text-text-dim tracking-[0.3em] uppercase mb-6"
      >
        05 — Contact
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left — headline + socials */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-6"
          >
            Let's build something{' '}
            <span className="text-accent italic">remarkable.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="font-mono text-sm text-text-muted leading-relaxed mb-10"
          >
            Whether you have a project in mind, a role to fill, or just want to say hello —
            my inbox is always open. I typically respond within 24 hours.
          </motion.p>

          {/* Email link */}
          <motion.a
            href="mailto:your@email.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            data-hover="true"
            className="inline-flex items-center gap-3 font-mono text-sm text-accent hover:gap-5 transition-all duration-300 mb-12 group"
          >
            your@email.com
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>

          {/* Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-6"
          >
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                data-hover="true"
                className="text-text-muted hover:text-accent transition-colors duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Tell me about your project..."
            value={form.message}
            onChange={handleChange}
            rows={6}
            className={`${inputClass} resize-none`}
          />
          <button
            onClick={handleSubmit}
            disabled={sending}
            data-hover="true"
            className="w-full px-8 py-4 bg-accent text-bg font-mono text-sm font-medium hover:bg-accent-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? 'Sending...' : 'Send Message →'}
          </button>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} Your Name. Built with React & Tailwind.
        </p>
        <p className="font-mono text-xs text-text-dim">
          Designed & developed with{' '}
          <span className="text-accent">♥</span>{' '}
          in Chennai
        </p>
      </motion.div>
    </section>
  )
}