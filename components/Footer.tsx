'use client'

import React from 'react'
import { 
  GitBranch, 
  Wifi, 
  Zap, 
  Bell, 
  Check, 
  XCircle,
  Settings,
  FileJson,
  Boxes,
  Code2,
  Paintbrush,
  Frame,
  Palette
} from 'lucide-react'

const Footer = () => {
  const technologies = [
    { 
      name: 'Next.js 14', 
      icon: <Boxes size={14} className="text-black dark:text-white" />,
      tooltip: 'Built with Next.js 14'
    },
    { 
      name: 'React 18', 
      icon: <Code2 size={14} className="text-blue-500" />,
      tooltip: 'Powered by React 18'
    },
    { 
      name: 'TypeScript', 
      icon: <FileJson size={14} className="text-blue-600" />,
      tooltip: 'TypeScript for type safety'
    },
    { 
      name: 'Tailwind CSS', 
      icon: <Paintbrush size={14} className="text-cyan-500" />,
      tooltip: 'Styled with Tailwind CSS'
    },
    { 
      name: 'Framer Motion', 
      icon: <Frame size={14} className="text-purple-500" />,
      tooltip: 'Animated with Framer Motion'
    },
    { 
      name: 'Lucide Icons', 
      icon: <Palette size={14} className="text-gray-600 dark:text-gray-300" />,
      tooltip: 'Icons by Lucide'
    },
  ]

  return (
    <footer className="h-6 bg-white dark:bg-[#007acc] text-gray-800 dark:text-white text-xs flex items-center justify-between px-2 select-none transition-colors duration-200">
      {/* Left Section */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Git Info */}
        <div className="hidden sm:flex items-center space-x-2 px-2 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200">
          <GitBranch size={14} />
          <span>main</span>
        </div>

        {/* Project Status */}
        <div className="hidden md:flex items-center space-x-2 px-2 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200">
          <Check size={14} />
          <span>0 issues</span>
        </div>

        {/* Error/Warning Status */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <XCircle size={14} className="text-red-400" />
          <span className="hidden sm:inline">0</span>
          <Bell size={14} className="text-yellow-400" />
          <span className="hidden sm:inline">0</span>
        </div>
      </div>

      {/* Center Section - Technologies */}
      <div className="flex-1 flex items-center justify-center space-x-2 md:space-x-4 overflow-x-auto no-scrollbar">
        {technologies.map((tech, index) => (
          <div
            key={tech.name}
            className="flex items-center space-x-1 px-1 md:px-2 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer group relative transition-colors duration-200"
            title={tech.tooltip}
          >
            {tech.icon}
            <span className="hidden md:inline">{tech.name}</span>
            {index < technologies.length - 1 && <span className="hidden md:inline ml-2">•</span>}
            
            {/* Mobile Tooltip */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 md:hidden">
              {tech.name}
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2 md:space-x-3">
        {/* Connection Status */}
        <div className="hidden sm:flex items-center space-x-2 px-2 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200">
          <Wifi size={14} />
          <span className="hidden md:inline">Connected</span>
        </div>

        {/* Performance */}
        <div className="hidden md:flex items-center space-x-2 px-2 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200">
          <Zap size={14} />
          <span>Optimized</span>
        </div>

        {/* Settings */}
        <div className="flex items-center space-x-2 px-2 hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer transition-colors duration-200">
          <Settings size={14} />
        </div>
      </div>
    </footer>
  )
}

export default Footer 