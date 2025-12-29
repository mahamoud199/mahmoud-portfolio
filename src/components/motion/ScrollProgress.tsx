import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 180, damping: 30 })
  return (
    <motion.div
      aria-hidden
      className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-white/60"
      style={{ scaleX }}
    />
  )
}
