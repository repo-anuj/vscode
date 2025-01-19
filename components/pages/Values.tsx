'use client'

import { motion } from 'framer-motion'

const Values = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Constantly pushing boundaries and embracing new technologies to create better solutions.'
    },
    {
      title: 'Excellence',
      description: 'Striving for the highest quality in everything we do, from code to customer service.'
    },
    {
      title: 'Integrity',
      description: 'Maintaining honest and ethical practices in all our business dealings.'
    },
    {
      title: 'Collaboration',
      description: 'Working together as a team to achieve common goals and deliver exceptional results.'
    },
    {
      title: 'User-Centric',
      description: 'Putting users first and creating solutions that address their real needs.'
    },
    {
      title: 'Continuous Learning',
      description: 'Embracing growth and learning as core aspects of our professional development.'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Our Values</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {value.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Values 