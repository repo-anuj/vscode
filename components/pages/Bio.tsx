'use client'

import { motion } from 'framer-motion'

const Bio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 font-mono"
    >
      <div className="text-gray-800 dark:text-white">
        <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
        <span className="text-blue-600 dark:text-blue-400">bio</span>{' '}
        <span className="text-gray-800 dark:text-white">=</span>{' '}
        <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span>
      </div>

      <div className="ml-8">
        <span className="text-blue-600 dark:text-blue-400">name</span>:{' '}
        <span className="text-green-600 dark:text-green-400">"Anuj Dubey"</span>,
      </div>

      <div className="ml-8">
        <span className="text-blue-600 dark:text-blue-400">role</span>:{' '}
        <span className="text-green-600 dark:text-green-400">"Full Stack Developer"</span>,
      </div>

      <div className="ml-8">
        <span className="text-blue-600 dark:text-blue-400">location</span>:{' '}
        <span className="text-green-600 dark:text-green-400">"Your Location"</span>,
      </div>

      <div className="ml-8">
        <span className="text-blue-600 dark:text-blue-400">interests</span>:{' '}
        <span className="text-yellow-600 dark:text-yellow-400">{'['}</span>
        <span className="text-green-600 dark:text-green-400">"Coding", "Technology", "Innovation"</span>
        <span className="text-yellow-600 dark:text-yellow-400">{']'}</span>
      </div>

      <div className="text-yellow-600 dark:text-yellow-400">{'}'}</div>
    </motion.div>
  )
}

export default Bio 