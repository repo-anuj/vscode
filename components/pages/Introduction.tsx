'use client'

import { motion } from 'framer-motion'
import { useCallback } from 'react'
import { Particles } from '@tsparticles/react'
import { type Container, type Engine } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const Introduction = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative min-h-full bg-white dark:bg-[#1e1e1e] overflow-hidden"
    >
      {/* Particle Background */}
      <div className="absolute inset-0">
        <Particles
          className="w-full h-full"
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 120,
            particles: {
              color: {
                value: '#0078d4',
              },
              links: {
                color: '#0078d4',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full p-8 text-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Anuj Dubey
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
            A passionate Full Stack Developer crafting elegant solutions through code. 
            Specializing in building exceptional digital experiences.
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4"
        >
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
            View Projects
          </button>
          <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-colors">
            Contact Me
          </button>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12 text-gray-600 dark:text-gray-400"
        >
          <p className="flex items-center gap-2">
            <span className="animate-pulse">▼</span>
            Scroll to explore
            <span className="animate-pulse">▼</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Introduction 