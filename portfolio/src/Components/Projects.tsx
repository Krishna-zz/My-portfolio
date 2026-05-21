import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react'
import clsx from 'clsx'
import { projects } from '../data/projects.js'

type Category = 'All' | 'Full-Stack' | 'Frontend' | 'Backend'
const categories: Category[] = ['All', 'Full-Stack', 'Frontend', 'Backend']

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  category: string
  year: string
  live: string
  github: string
  featured: boolean
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<Category>('All')
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  const filtered: Project[] = activeFilter === 'All'
    ? projects
    : projects.filter((p: Project) => p.category === activeFilter)

  return (
    <section id="projects" className="py-32 section-padding" ref={ref}>
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-xs text-text-dim tracking-[0.3em] uppercase mb-6"
      >
        03 — Projects
      </motion.p>

      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-display font-semibold text-4xl md:text-5xl text-text-primary"
        >
          Selected Work
        </motion.h2>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-1 bg-surface border border-border p-1"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              data-hover="true"
              className={clsx(
                'px-4 py-2 font-mono text-xs transition-all duration-300',
                activeFilter === cat
                  ? 'bg-accent text-bg'
                  : 'text-text-muted hover:text-text-primary'
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Project grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        <AnimatePresence mode="popLayout">
          {filtered.map((project: Project, i: number) => (
            <ProjectCard key={project.id} project={project} index={i} inView={inView} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  inView,
}: {
  project: Project
  index: number
  inView: boolean
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative bg-bg border border-border p-6 md:p-8 flex flex-col gap-6 transition-colors duration-300 hover:border-accent/30 hover:bg-surface"
    >
      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-text-dim">{project.year}</span>
          {project.featured && (
            <span className="px-2 py-0.5 border border-accent/40 text-accent font-mono text-[10px] tracking-wider">
              FEATURED
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-hover="true"
            className="text-text-muted hover:text-text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            data-hover="true"
            className="text-text-muted hover:text-accent transition-colors"
            aria-label="Live site"
          >
            <ExternalLink size={15} />
          </a>
        </div>
      </div>

      {/* Title */}
      <div>
        <h3 className="font-display font-semibold text-2xl text-text-primary group-hover:text-accent transition-colors duration-300 flex items-start gap-2">
          {project.title}
          <ArrowUpRight
            size={16}
            className="mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent"
          />
        </h3>
        <p className="font-mono text-sm text-text-muted mt-3 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Tech stack */}
      <div className="mt-auto flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-surface border border-border font-mono text-[10px] text-text-dim tracking-wider"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  )
}