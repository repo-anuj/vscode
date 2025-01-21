'use client'

import { motion } from 'framer-motion'

const Experience = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 font-mono"
    >
      <div className="text-gray-800 dark:text-white">
        <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
        <span className="text-blue-600 dark:text-blue-400">experience</span>{' '}
        <span className="text-gray-800 dark:text-white">=</span>{' '}
        <span className="text-yellow-600 dark:text-yellow-400">[</span>
      </div>

      <div className="ml-8">
        <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span>
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">position</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;Software Developer&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">company</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;Company Name&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">duration</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;2022 - Present&quot;</span>
      </div>

      <div className="ml-8">
        <span className="text-yellow-600 dark:text-yellow-400">{'}'}</span>,
      </div>

      <div className="text-yellow-600 dark:text-yellow-400">{']'}</div>
    </motion.div>
  )
}

export default Experience 