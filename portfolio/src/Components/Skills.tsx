import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import { skills } from '../data/skills.js'

interface SkillGroup {
  category: string
  items: string[]
}

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="skills" className="py-32 section-padding" ref={ref}>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs text-text-dim tracking-[0.3em] uppercase mb-6"
      >
        04 — Skills
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        className="font-display font-semibold text-4xl md:text-5xl text-text-primary mb-16"
      >
        Tools of the Trade
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {skills.map((group: SkillGroup, groupIndex: number) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.2 + groupIndex * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Category label */}
            <div className="flex items-center gap-3 mb-5">
              <span className="w-6 h-px bg-accent" />
              <h3 className="font-mono text-xs text-accent tracking-[0.2em] uppercase">
                {group.category}
              </h3>
            </div>

            {/* Skill tags */}
            <div className="flex flex-col gap-2">
              {group.items.map((skill: string, skillIndex: number) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.35 + groupIndex * 0.1 + skillIndex * 0.06,
                  }}
                  whileHover={{ x: 6 }}
                  className="group flex items-center gap-3 py-2 border-b border-border cursor-default"
                  data-hover="true"
                >
                  <span className="w-1 h-1 rounded-full bg-text-dim group-hover:bg-accent transition-colors duration-300" />
                  <span className="font-mono text-sm text-text-muted group-hover:text-text-primary transition-colors duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="mt-20 pt-10 border-t border-border"
      >
        <p className="font-display text-2xl md:text-3xl text-text-dim italic text-center">
          "Always learning. Always building."
        </p>
      </motion.div>
    </section>
  )
}