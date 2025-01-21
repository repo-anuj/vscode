'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="h-12 bg-white dark:bg-[#1e1e1e] border-b border-[#0078d4]/30 relative z-50">
      {/* Top blue accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#0078d4]" />
      
      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            VSCode Portfolio
          </span>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md transition-colors">
            <span className="text-sm text-gray-600 dark:text-gray-400">☰</span>
          </button>
        </div>
      </div>

      {/* Bottom shadow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#0078d4]/0 via-[#0078d4]/20 to-[#0078d4]/0" />
    </header>
  )
}

export default Header 