import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)
    }

    const handleEnter = () => setIsVisible(true)
    const handleLeave = () => setIsVisible(false)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    const checkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink = target.closest('a, button, [data-hover]') !== null
      setIsHovering(isLink)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mouseenter', handleEnter)
    window.addEventListener('mouseleave', handleLeave)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mouseenter', handleEnter)
      window.removeEventListener('mouseleave', handleLeave)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isVisible])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-accent"
        animate={{
          x: mousePos.x - (isHovering ? 24 : 16),
          y: mousePos.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          opacity: isVisible ? (isHovering ? 0.6 : 0.4) : 0,
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 18, mass: 0.5 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full bg-accent"
        animate={{
          x: mousePos.x - (isHovering ? 4 : 3),
          y: mousePos.y - (isHovering ? 4 : 3),
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
          opacity: isVisible ? 1 : 0,
          scale: isClicking ? 0.6 : 1,
        }}
        transition={{ type: 'spring', stiffness: 600, damping: 28 }}
      />
    </>
  )
}