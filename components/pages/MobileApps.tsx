'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Smartphone } from 'lucide-react'

const MobileApps = () => {
  const mobileApps = [
    {
      title: 'Fitness Tracker',
      description: 'A comprehensive fitness tracking app with workout plans and progress monitoring.',
      platform: 'iOS & Android',
      stack: 'React Native, TypeScript, Redux, Firebase',
      features: [
        'Customizable workout plans',
        'Progress tracking',
        'Nutrition logging',
        'Social sharing'
      ],
      github: '#',
      appStore: '#',
      playStore: '#'
    },
    {
      title: 'Travel Companion',
      description: 'An all-in-one travel companion app for planning and managing trips.',
      platform: 'iOS & Android',
      stack: 'Flutter, Dart, Google Maps API, Node.js',
      features: [
        'Trip planning',
        'Location tracking',
        'Offline maps',
        'Travel recommendations'
      ],
      github: '#',
      appStore: '#',
      playStore: '#'
    },
    {
      title: 'Language Learning App',
      description: 'An interactive language learning app with gamification elements.',
      platform: 'iOS & Android',
      stack: 'React Native, Redux Toolkit, Express, MongoDB',
      features: [
        'Interactive lessons',
        'Speech recognition',
        'Progress tracking',
        'Daily challenges'
      ],
      github: '#',
      appStore: '#',
      playStore: '#'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-8"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Mobile Applications</h1>
      <div className="space-y-8">
        {mobileApps.map((app, index) => (
          <motion.div
            key={app.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <Smartphone className="text-gray-600 dark:text-gray-300" size={24} />
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                    {app.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {app.platform}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <a
                  href={app.github}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a
                  href={app.appStore}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>App Store</span>
                </a>
                <a
                  href={app.playStore}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                  <span>Play Store</span>
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

export default MobileApps 