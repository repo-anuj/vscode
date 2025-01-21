'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface PageContainerProps {
  children: ReactNode
  title: string
}

const PageContainer = ({ children, title }: PageContainerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-full bg-white dark:bg-[#1e1e1e] relative"
    >
      {/* Left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#0078d4]/20" />
      
      {/* Right border accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#0078d4]/20" />

      {/* Header with blue accent */}
      <div className="border-b border-[#0078d4] dark:border-[#0078d4]">
        <div className="max-w-6xl mx-auto p-8">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-800 dark:text-gray-100 mb-4"
          >
            {title}
          </motion.h1>
          <div className="h-1 w-32 bg-[#0078d4] rounded-full mb-2 transform-origin-left" />
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto p-8">
        {children}
      </div>

      {/* Footer with blue accent */}
      <div className="border-t border-[#0078d4]/20">
        <div className="max-w-6xl mx-auto p-4">
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            © 2024 Portfolio
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PageContainer 