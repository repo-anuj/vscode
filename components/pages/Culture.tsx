'use client'

import { motion } from 'framer-motion'

const Culture = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Company Culture</h1>
      <div className="space-y-8 text-gray-600 dark:text-gray-300">
        <div className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Culture</h2>
          <p className="mb-4">
            We foster an environment of innovation, collaboration, and continuous learning. 
            Our culture is built on trust, respect, and a shared passion for technology.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Open Communication</li>
            <li>Continuous Learning</li>
            <li>Work-Life Balance</li>
            <li>Innovation First</li>
            <li>Team Collaboration</li>
          </ul>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Work Environment</h2>
            <p>
              Modern, flexible workspace designed to promote creativity and collaboration.
              Remote-friendly with emphasis on results and team synergy.
            </p>
          </div>
          <div className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Growth Opportunities</h2>
            <p>
              Continuous learning programs, mentorship opportunities, and clear career progression paths.
              Regular workshops and training sessions.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Culture 