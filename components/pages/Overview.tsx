'use client'

import { motion } from 'framer-motion'

const Overview = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Company Overview</h1>
      <div className="space-y-6 text-gray-600 dark:text-gray-300">
        <p>
          We are a forward-thinking technology company specializing in innovative software solutions.
          Our mission is to transform complex challenges into elegant, user-friendly applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Mission</h2>
            <p>To deliver exceptional software solutions that empower businesses and enhance user experiences.</p>
          </div>
          <div className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Our Vision</h2>
            <p>To be at the forefront of technological innovation, setting new standards in software development.</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Overview 