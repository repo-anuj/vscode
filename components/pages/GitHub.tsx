'use client'

import { motion } from 'framer-motion'
import { Github, Globe, Mail, MapPin } from 'lucide-react'

const GitHub = () => {
  const stats = [
    { label: 'Public Repos', value: '15+' },
    { label: 'Total Stars', value: '50+' },
    { label: 'Projects', value: '20+' },
    { label: 'Contributions', value: '500+' }
  ]

  const skills = [
    { name: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', items: ['Node.js', 'Express', 'MySQL', 'MongoDB'] },
    { name: 'Mobile', items: ['Flutter', 'React Native', 'Android', 'Kotlin'] },
    { name: 'Tools', items: ['Git', 'Docker', 'Firebase', 'AWS'] }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-full bg-white dark:bg-[#1e1e1e] p-8"
    >
      {/* Header Section */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row items-center gap-8 mb-12 bg-gray-50 dark:bg-[#2d2d2d] p-8 rounded-lg"
        >
          <img
            src="https://avatars.githubusercontent.com/repo-anuj"
            alt="Anuj Dubey"
            className="w-32 h-32 rounded-full border-4 border-white dark:border-[#1e1e1e] shadow-lg"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
              Anuj Dubey
            </h1>
            <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Full Stack Developer
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>India</span>
              </div>
              <div className="flex items-center gap-1">
                <Mail size={16} />
                <span>00a20.j50@gmail.com</span>
              </div>
              <div className="flex items-center gap-1">
                <Globe size={16} />
                <a href="https://github.com/repo-anuj" className="hover:text-blue-500 transition-colors">
                  github.com/repo-anuj
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-gray-50 dark:bg-[#2d2d2d] p-6 rounded-lg text-center"
            >
              <div className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((category) => (
              <div
                key={category.name}
                className="bg-gray-50 dark:bg-[#2d2d2d] p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm bg-gray-200 dark:bg-[#1e1e1e] text-gray-700 dark:text-gray-300 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          <div className="bg-gray-50 dark:bg-[#2d2d2d] p-4 rounded-lg">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs?username=repo-anuj&show_icons=true&locale=en&layout=compact&theme=dark&bg_color=2d2d2d&title_color=fff&text_color=fff&hide_border=true"
              alt="Top Languages"
              className="w-full"
            />
          </div>
          <div className="bg-gray-50 dark:bg-[#2d2d2d] p-4 rounded-lg">
            <img
              src="https://github-readme-stats.vercel.app/api?username=repo-anuj&show_icons=true&locale=en&theme=dark&bg_color=2d2d2d&title_color=fff&text_color=fff&icon_color=58a6ff&hide_border=true"
              alt="GitHub Stats"
              className="w-full"
            />
          </div>
          <div className="bg-gray-50 dark:bg-[#2d2d2d] p-4 rounded-lg">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=repo-anuj&theme=dark&background=2d2d2d&ring=58a6ff&fire=58a6ff&currStreakLabel=58a6ff&hide_border=true"
              alt="GitHub Streak"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Trophy Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-gray-50 dark:bg-[#2d2d2d] p-6 rounded-lg"
        >
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            GitHub Trophies
          </h2>
          <img
            src="https://github-profile-trophy.vercel.app/?username=repo-anuj&theme=darkhub&no-frame=true&margin-w=15&margin-h=15"
            alt="GitHub Trophies"
            className="w-full"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default GitHub 