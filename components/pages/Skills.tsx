'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Image from 'next/image'
import PageContainer from '../layout/PageContainer'

gsap.registerPlugin(ScrollTrigger)

interface Skill {
  name: string
  level: number
  color: string
  category: string
  icon: string
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, color: '#61DAFB', category: 'Frontend', icon: '/icons/react.svg' },
  { name: 'Next.js', level: 85, color: '#000000', category: 'Frontend', icon: '/icons/nextjs.svg' },
  { name: 'TypeScript', level: 85, color: '#3178C6', category: 'Frontend', icon: '/icons/typescript.svg' },
  { name: 'Tailwind CSS', level: 90, color: '#38B2AC', category: 'Frontend', icon: '/icons/tailwind.svg' },
  
  // Backend
  { name: 'Node.js', level: 85, color: '#339933', category: 'Backend', icon: '/icons/nodejs.svg' },
  { name: 'Express', level: 80, color: '#000000', category: 'Backend', icon: '/icons/express.svg' },
  { name: 'MongoDB', level: 75, color: '#47A248', category: 'Backend', icon: '/icons/mongodb.svg' },
  { name: 'MySQL', level: 80, color: '#4479A1', category: 'Backend', icon: '/icons/mysql.svg' },
  
  // Mobile
  { name: 'Flutter', level: 75, color: '#02569B', category: 'Mobile', icon: '/icons/flutter.svg' },
  { name: 'React Native', level: 70, color: '#61DAFB', category: 'Mobile', icon: '/icons/react.svg' },
  { name: 'Android', level: 65, color: '#3DDC84', category: 'Mobile', icon: '/icons/android.svg' },
  
  // Tools
  { name: 'Git', level: 85, color: '#F05032', category: 'Tools', icon: '/icons/git.svg' },
  { name: 'Docker', level: 70, color: '#2496ED', category: 'Tools', icon: '/icons/docker.svg' },
  { name: 'AWS', level: 65, color: '#232F3E', category: 'Tools', icon: '/icons/aws.svg' },
  { name: 'Firebase', level: 80, color: '#FFCA28', category: 'Tools', icon: '/icons/firebase.svg' }
]

const categories = ['Frontend', 'Backend', 'Mobile', 'Tools']

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill bars on scroll
      gsap.from('.skill-bar-fill', {
        width: 0,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        }
      })

      // Animate skill cards
      gsap.from('.skill-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top center',
          toggleActions: 'play none none reverse'
        }
      })
    }, skillsRef)

    return () => ctx.revert()
  }, [])

  return (
    <PageContainer title="Skills & Expertise">
      <div ref={skillsRef}>
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + categoryIndex * 0.1 }}
            className="mb-12 relative"
          >
            {/* Category header with blue accent */}
            <div className="flex items-center mb-6">
              <div className="w-1 h-6 bg-[#0078d4] rounded-r mr-4 separator-line transform-origin-left" />
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {category}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills
                .filter(skill => skill.category === category)
                .map((skill) => (
                  <div
                    key={skill.name}
                    className="skill-card bg-gray-50 dark:bg-[#2d2d2d] p-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-2 border-[#0078d4]"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-8 h-8 mr-3 flex items-center justify-center">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={24}
                          height={24}
                          className="filter brightness-75"
                        />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                        {skill.name}
                      </h3>
                    </div>
                    <div className="relative h-4 bg-gray-200 dark:bg-[#1e1e1e] rounded-full overflow-hidden">
                      <div
                        className="skill-bar-fill absolute h-full rounded-full transition-all duration-300"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                    <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                      Proficiency: {skill.level}%
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}

        {/* Additional Skills Section with blue accent */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gray-50 dark:bg-[#2d2d2d] p-8 rounded-lg border-t-2 border-[#0078d4]"
        >
          <div className="flex items-center mb-6">
            <div className="w-1 h-6 bg-[#0078d4] rounded-r mr-4 separator-line transform-origin-left" />
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Additional Skills
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              'REST APIs', 'GraphQL', 'Redux', 'Jest', 'CI/CD', 'Agile',
              'UI/UX Design', 'Responsive Design', 'Performance Optimization',
              'WebSockets', 'OAuth', 'JWT', 'Microservices'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8 + index * 0.05 }}
                className="px-4 py-2 bg-white dark:bg-[#1e1e1e] rounded-full text-sm text-gray-700 dark:text-gray-300 hover:shadow-md transition-all duration-300 cursor-default border border-[#0078d4]/20 hover:border-[#0078d4]"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </PageContainer>
  )
}

export default Skills 