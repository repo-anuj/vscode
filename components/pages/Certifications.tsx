'use client'

import { motion } from 'framer-motion'

const Certifications = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-8 font-mono"
    >
      <div className="text-gray-800 dark:text-white">
        <span className="text-purple-600 dark:text-purple-400">const</span>{' '}
        <span className="text-blue-600 dark:text-blue-400">certifications</span>{' '}
        <span className="text-gray-800 dark:text-white">=</span>{' '}
        <span className="text-yellow-600 dark:text-yellow-400">[</span>
      </div>

      <div className="ml-8">
        <span className="text-yellow-600 dark:text-yellow-400">{'{'}</span>
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">name</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;Web Development Certification&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">issuer</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;Platform Name&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">date</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;2023&quot;</span>,
      </div>

      <div className="ml-12">
        <span className="text-blue-600 dark:text-blue-400">url</span>:{' '}
        <span className="text-green-600 dark:text-green-400">&quot;https://certification-url.com&quot;</span>
      </div>

      <div className="ml-8">
        <span className="text-yellow-600 dark:text-yellow-400">{'}'}</span>
      </div>

      <div className="text-yellow-600 dark:text-yellow-400">{']'}</div>
    </motion.div>
  )
}

export default Certifications 