'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
      github: '#',
      live: '#'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'An AI-powered platform for generating marketing content.',
      technologies: ['Python', 'FastAPI', 'OpenAI', 'React'],
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
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Portfolio Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-[#2d2d2d] p-6 rounded-lg shadow-sm"
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map(tech => (
                <span
                  key={tech}
                  className="px-2 py-1 text-sm bg-gray-100 dark:bg-[#1e1e1e] rounded text-gray-600 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github size={18} />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <ExternalLink size={18} />
                <span>Live Demo</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Portfolio 