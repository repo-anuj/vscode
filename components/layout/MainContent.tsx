'use client'

import { useState, forwardRef, useImperativeHandle } from 'react'
import { X } from 'lucide-react'
import Introduction from '../pages/Introduction'
import Skills from '../pages/Skills'
import Experience from '../pages/Experience'
import Bio from '../pages/Bio'
import Education from '../pages/Education'
import Certifications from '../pages/Certifications'

export type PageType = 'Introduction' | 'Skills' | 'Experience' | 'Bio' | 'Education' | 'Certifications'

interface OpenTab {
  id: PageType
  path: string
}

export interface MainContentRef {
  openTab: (page: PageType) => void
}

const getFilePath = (page: PageType): string => {
  const paths: Record<PageType, string> = {
    Introduction: '/pages/Introduction.tsx',
    Skills: '/pages/Skills.tsx',
    Experience: '/pages/Experience.tsx',
    Bio: '/pages/Bio.tsx',
    Education: '/pages/Education.tsx',
    Certifications: '/pages/Certifications.tsx'
  }
  return paths[page]
}

const MainContent = forwardRef<MainContentRef>((_, ref) => {
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([])
  const [activeTab, setActiveTab] = useState<PageType | null>(null)

  useImperativeHandle(ref, () => ({
    openTab: (page: PageType) => {
      if (!openTabs.find(tab => tab.id === page)) {
        setOpenTabs(prev => [...prev, { id: page, path: getFilePath(page) }])
      }
      setActiveTab(page)
    }
  }))

  const closeTab = (tabId: PageType) => {
    setOpenTabs(prev => prev.filter(tab => tab.id !== tabId))
    if (activeTab === tabId) {
      setActiveTab(openTabs[openTabs.length - 2]?.id || null)
    }
  }

  const renderPage = () => {
    if (!activeTab) return null

    const components: Record<PageType, JSX.Element> = {
      Introduction: <Introduction />,
      Skills: <Skills />,
      Experience: <Experience />,
      Bio: <Bio />,
      Education: <Education />,
      Certifications: <Certifications />
    }

    return components[activeTab]
  }

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-[#1e1e1e] relative">
      {/* Top tabs section with blue accent */}
      <div className="h-9 border-b border-[#0078d4]/30 flex items-center bg-gray-100 dark:bg-[#2d2d2d] overflow-x-auto">
        {openTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`h-full px-4 flex items-center gap-2 text-sm ${
              activeTab === tab.id
                ? 'bg-white dark:bg-[#1e1e1e] border-t-2 border-t-[#0078d4]'
                : 'hover:bg-gray-200 dark:hover:bg-gray-800'
            } border-r border-[#0078d4]/30 group transition-colors min-w-[150px]`}
          >
            <span className="truncate flex-1 text-left">{tab.path}</span>
            <X
              size={14}
              className="opacity-0 group-hover:opacity-100 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-sm"
              onClick={(e) => {
                e.stopPropagation()
                closeTab(tab.id)
              }}
            />
          </button>
        ))}
      </div>

      {/* Main content area */}
      <div className="flex-1 overflow-auto relative">
        {/* Left border accent */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#0078d4]/30 via-[#0078d4]/10 to-[#0078d4]/30" />
        
        {/* Right border accent */}
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#0078d4]/30 via-[#0078d4]/10 to-[#0078d4]/30" />
        
        {/* Bottom border accent */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-[#0078d4]/30 via-[#0078d4]/10 to-[#0078d4]/30" />

        {renderPage()}
      </div>
    </div>
  )
})

MainContent.displayName = 'MainContent'

export default MainContent 