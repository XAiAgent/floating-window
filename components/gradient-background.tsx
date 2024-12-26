'use client'

import { motion } from "framer-motion"

export default function GradientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Primary gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15), rgba(0, 0, 0, 0))",
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />

      {/* Secondary gradient */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.15), rgba(0, 0, 0, 0))",
        }}
        animate={{
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
    </div>
  )
}

