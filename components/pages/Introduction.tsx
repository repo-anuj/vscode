'use client'

import { motion } from 'framer-motion'

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-300px)] text-center"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
            Anuj Dubey
          </span>
        </h1>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          A passionate Full Stack Developer crafting elegant solutions through code. 
          Specializing in building exceptional digital experiences.
        </h2>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex gap-4"
      >
        <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
          View Projects
        </button>
        <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors">
          Contact Me
        </button>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12 text-gray-600 dark:text-gray-400"
      >
        <p className="flex items-center gap-2">
          <span className="animate-pulse">▼</span>
          Scroll to explore
          <span className="animate-pulse">▼</span>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default Introduction 