'use client'

import { motion } from 'framer-motion'

const Education = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 font-mono"
    >
      <div className="text-gray-800 dark:text-white">
        <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
        <span className="text-blue-600 dark:text-blue-400">education</span>{' '}
        <span className="text-gray-800 dark:text-white">=</span>{' '}
        <span className="text-yellow-600 dark:text-yellow-400">[</span>
      </div>

      <div className="ml-8">
        <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span>
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">degree</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;Bachelor&apos;s in Computer Science&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">institution</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;University Name&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">duration</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;2019 - 2023&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">grade</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;First Class&quot;</span>
      </div>

      <div className="ml-8">
        <span className="text-yellow-600 dark:text-yellow-400">{'}'}</span>
      </div>

      <div className="text-yellow-600 dark:text-yellow-400">{']'}</div>
    </motion.div>
  )
}

export default Education 