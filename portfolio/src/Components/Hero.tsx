import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { ArrowDown } from 'lucide-react'

const name = 'Your Name'
const roles = ['Full-Stack Developer', 'UI/UX Designer', 'Digital Craftsman']

const letterVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.06,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.4 },
  },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-accent opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] rounded-full bg-accent opacity-[0.02] blur-[100px]" />
      </div>

      {/* Vertical line decoration */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute left-6 md:left-12 lg:left-24 top-1/4 h-32 w-px bg-gradient-to-b from-transparent via-accent to-transparent origin-top"
      />

      {/* Index label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="font-mono text-xs text-text-dim tracking-[0.3em] uppercase mb-8"
      >
        01 — Introduction
      </motion.p>

      {/* Main name */}
      <div className="overflow-hidden">
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-display font-bold leading-none tracking-tight"
          style={{ fontSize: 'clamp(3.5rem, 12vw, 10rem)' }}
          aria-label={name}
        >
          {name.split('').map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className="inline-block text-text-primary"
              style={{ marginRight: char === ' ' ? '0.3em' : '0' }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>
      </div>

      {/* Role subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        {roles.map((role, i) => (
          <span key={role} className="flex items-center gap-3">
            <span className="font-mono text-sm md:text-base text-text-muted">
              {role}
            </span>
            {i < roles.length - 1 && (
              <span className="text-accent text-xs">◆</span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="mt-8 max-w-lg font-mono text-sm text-text-muted leading-relaxed"
      >
        I build elegant systems and craft interfaces that people actually love using.
        Based in Chennai, available worldwide.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="mt-12 flex items-center gap-6"
      >
        <Link
          to="projects"
          smooth
          duration={800}
          offset={-80}
          data-hover="true"
          className="px-8 py-3 bg-accent text-bg font-mono text-sm font-medium hover:bg-accent-light transition-colors duration-300"
        >
          View My Work
        </Link>
        <Link
          to="contact"
          smooth
          duration={800}
          offset={-80}
          data-hover="true"
          className="px-8 py-3 border border-border text-text-muted font-mono text-sm hover:border-accent hover:text-accent transition-all duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-text-dim tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} className="text-accent" />
        </motion.div>
      </motion.div>
    </section>
  )
}