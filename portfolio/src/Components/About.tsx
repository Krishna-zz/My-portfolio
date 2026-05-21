import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '20+', label: 'Projects Shipped' },
  { value: '10+', label: 'Happy Clients' },
  { value: '∞', label: 'Cups of Coffee' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="py-32 section-padding" ref={ref}>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs text-text-dim tracking-[0.3em] uppercase mb-16"
      >
        02 — About Me
      </motion.p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left — text */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl text-text-primary leading-tight mb-8"
          >
            Crafting digital experiences with{' '}
            <span className="text-accent italic">precision</span> and soul.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="space-y-4 font-mono text-sm text-text-muted leading-relaxed"
          >
            <p>
              I'm a full-stack developer and designer who believes the best products live at the
              intersection of beautiful design and solid engineering. I don't just build features —
              I build systems that scale and interfaces that delight.
            </p>
            <p>
              My background spans both sides of the stack: from architecting APIs and databases
              to obsessing over typography and micro-interactions. This dual fluency is what
              lets me ship products that are as robust under the hood as they are beautiful
              on the surface.
            </p>
            <p>
              When I'm not coding, I'm exploring type design, contributing to open source,
              or drinking questionable amounts of filter coffee in Chennai.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="border-t border-border pt-4">
                <p className="font-display text-3xl font-semibold text-accent">{stat.value}</p>
                <p className="font-mono text-xs text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="relative"
        >
          {/* Photo placeholder */}
          <div className="relative aspect-[3/4] bg-surface border border-border overflow-hidden">
            {/* Replace this div with an <img> tag for your actual photo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="font-display text-8xl text-accent opacity-20 select-none">YN</p>
                <p className="font-mono text-xs text-text-dim mt-4">Your Photo Here</p>
              </div>
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-bg to-transparent" />
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 bg-surface border border-border-accent px-5 py-4"
          >
            <p className="font-mono text-xs text-text-dim">Currently</p>
            <p className="font-mono text-sm text-accent mt-1">Open to Work</p>
          </motion.div>

          {/* Decorative corner */}
          <div className="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-accent opacity-30" />
        </motion.div>
      </div>
    </section>
  )
}