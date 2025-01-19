'use client'

import React from 'react'
import { 
  Home,
  User,
  Briefcase,
  Code2,
  GraduationCap,
  MessageSquare,
  Download,
  Sun,
  Moon,
  Github
} from 'lucide-react'
import { useTheme } from './ThemeProvider'

const Header = () => {
  const { theme, toggleTheme } = useTheme()

  const menuItems = [
    { name: 'Home', icon: <Home size={16} /> },
    { name: 'About', icon: <User size={16} /> },
    { name: 'Experience', icon: <Briefcase size={16} /> },
    { name: 'Projects', icon: <Code2 size={16} /> },
    { name: 'Education', icon: <GraduationCap size={16} /> },
    { name: 'Contact', icon: <MessageSquare size={16} /> },
  ]

  return (
    <header className="bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-white p-2 flex items-center justify-between transition-colors duration-200">
      {/* VSCode Logo and Name */}
      <div className="flex items-center">
        <svg className="w-6 h-6 mr-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M95.9 76.3L76.6 95.6L24.2 76.3L4.9 95.6V4.4L24.2 23.7L76.6 4.4L95.9 23.7V76.3Z" fill="#0065A9"/>
          <path d="M76.6 95.6L24.2 76.3L4.9 95.6V4.4L24.2 23.7L76.6 4.4V95.6Z" fill="#007ACC"/>
          <path d="M76.6 4.4L24.2 23.7V76.3L76.6 95.6V4.4Z" fill="#1F9CF0"/>
        </svg>
        <span className="font-semibold hidden sm:inline">Anuj Dubey</span>
        <span className="font-semibold sm:hidden">AD</span>
      </div>

      {/* Menu Items */}
      <nav className="hidden md:flex space-x-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="flex items-center space-x-1 px-3 py-1 hover:bg-gray-100 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200"
          >
            {item.icon}
            <span className="ml-1">{item.name}</span>
          </button>
        ))}
      </nav>

      {/* Mobile Menu */}
      <nav className="flex md:hidden space-x-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className="p-2 hover:bg-gray-100 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200"
            title={item.name}
          >
            {item.icon}
          </button>
        ))}
      </nav>

      {/* Right Side Items */}
      <div className="flex items-center space-x-2">
        {/* Resume Download */}
        <button className="hidden sm:flex items-center space-x-1 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors duration-200">
          <Download size={16} />
          <span className="ml-1">Resume</span>
        </button>

        {/* GitHub */}
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200"
        >
          <Github size={20} />
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-1.5 hover:bg-gray-100 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}

export default Header

