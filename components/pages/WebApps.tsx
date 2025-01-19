'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const WebApps = () => {
  const webApps = [
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard for managing social media accounts and analytics.',
      stack: 'Next.js, TypeScript, TailwindCSS, Redux Toolkit',
      features: [
        'Real-time analytics',
        'Multi-platform integration',
        'Automated posting',
        'Performance metrics'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Cloud File Manager',
      description: 'A web-based file management system with cloud storage integration.',
      stack: 'React, Node.js, AWS S3, MongoDB',
      features: [
        'Drag and drop upload',
        'File sharing',
        'Version control',
        'Access management'
      ],
      github: '#',
      live: '#'
    },
    {
      title: 'Project Management Tool',
      description: 'A collaborative project management application with real-time updates.',
      stack: 'Vue.js, Express, PostgreSQL, Socket.io',
      features: [
        'Task tracking',
        'Team collaboration',
        'Resource management',
        'Progress reporting'
      ],
      github: '#',
      live: '#'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Web Applications</h1>
      <div className="space-y-8">
        {webApps.map((app, index) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                {app.title}
              </h2>
              <div className="flex gap-4">
                <a
                  href={app.github}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={app.live}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {app.description}
            </p>
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Tech Stack
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{app.stack}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 gap-2">
                {app.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default WebApps 