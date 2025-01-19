'use client'

import React, { useState, forwardRef, useImperativeHandle } from 'react'
import Introduction from './pages/Introduction'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Bio from './pages/Bio'
import Education from './pages/Education'
import Certifications from './pages/Certifications'
import Overview from './pages/Overview'
import Culture from './pages/Culture'
import Values from './pages/Values'
import Portfolio from './pages/Portfolio'
import WebApps from './pages/WebApps'
import MobileApps from './pages/MobileApps'
import GitHub from './pages/GitHub'
import { X } from 'lucide-react'

type PageType = 'Introduction' | 'Skills' | 'Experience' | 'Bio' | 'Education' | 'Certifications' |
  'Overview' | 'Culture' | 'Values' | 'Portfolio' | 'WebApps' | 'MobileApps'

interface OpenTab {
  id: PageType | 'GitHub'
  path: string
}

export interface MainContentRef {
  openTab: (pageType: PageType) => void
  showGitHub: () => void
}

const MainContent = forwardRef<MainContentRef>((_, ref) => {
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([])
  const [currentPage, setCurrentPage] = useState<PageType | 'GitHub' | null>(null)

  const getFilePath = (pageType: PageType | 'GitHub'): string => {
    if (pageType === 'GitHub') return 'portfolio/GitHub/README.md'
    
    const paths = {
      Introduction: 'portfolio/Home/Introduction.tsx',
      Skills: 'portfolio/Home/Skills.tsx',
      Experience: 'portfolio/Home/Experience.tsx',
      Bio: 'portfolio/About/Bio.tsx',
      Education: 'portfolio/About/Education.tsx',
      Certifications: 'portfolio/About/Certifications.tsx',
      Overview: 'portfolio/Company/Overview.tsx',
      Culture: 'portfolio/Company/Culture.tsx',
      Values: 'portfolio/Company/Values.tsx',
      Portfolio: 'portfolio/Projects/Portfolio.tsx',
      WebApps: 'portfolio/Projects/WebApps.tsx',
      MobileApps: 'portfolio/Projects/MobileApps.tsx'
    }
    return paths[pageType]
  }

  const openTab = (pageType: PageType) => {
    if (!openTabs.find(tab => tab.id === pageType)) {
      setOpenTabs(prev => [...prev, { id: pageType, path: getFilePath(pageType) }])
    }
    setCurrentPage(pageType)
  }

  const showGitHub = () => {
    if (!openTabs.find(tab => tab.id === 'GitHub')) {
      setOpenTabs(prev => [...prev, { id: 'GitHub', path: getFilePath('GitHub') }])
    }
    setCurrentPage('GitHub')
  }

  useImperativeHandle(ref, () => ({
    openTab,
    showGitHub
  }))

  const closeTab = (pageType: PageType | 'GitHub', e: React.MouseEvent) => {
    e.stopPropagation()
    setOpenTabs(prev => prev.filter(tab => tab.id !== pageType))
    if (currentPage === pageType) {
      setCurrentPage(openTabs[openTabs.length - 2]?.id || null)
    }
  }

  const renderPage = () => {
    if (!currentPage) return null

    switch (currentPage) {
      case 'Introduction':
        return <Introduction />
      case 'Skills':
        return <Skills />
      case 'Experience':
        return <Experience />
      case 'Bio':
        return <Bio />
      case 'Education':
        return <Education />
      case 'Certifications':
        return <Certifications />
      case 'Overview':
        return <Overview />
      case 'Culture':
        return <Culture />
      case 'Values':
        return <Values />
      case 'Portfolio':
        return <Portfolio />
      case 'WebApps':
        return <WebApps />
      case 'MobileApps':
        return <MobileApps />
      case 'GitHub':
        return <GitHub />
      default:
        return null
    }
  }

  return (
    <div className="h-full bg-white dark:bg-[#1e1e1e] transition-colors duration-200">
      {/* Tab Bar */}
      {openTabs.length > 0 && (
        <div className="flex items-center overflow-x-auto border-b border-gray-200 dark:border-[#2d2d2d] transition-colors duration-200">
          {openTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setCurrentPage(tab.id)}
              className={`group flex items-center px-3 py-2 text-xs border-r border-gray-200 dark:border-[#2d2d2d] transition-colors duration-200 ${
                currentPage === tab.id ? 'bg-gray-100 dark:bg-[#2d2d2d]' : ''
              }`}
            >
              <span className="text-gray-500 dark:text-gray-400">{tab.path}</span>
              <span
                onClick={(e) => closeTab(tab.id, e)}
                className="ml-2 p-0.5 rounded-sm opacity-0 group-hover:opacity-100 hover:bg-gray-200 dark:hover:bg-[#3d3d3d] transition-opacity duration-200"
              >
                <X size={14} />
              </span>
            </button>
          ))}
        </div>
      )}

      {/* Content Area */}
      <div className={`${openTabs.length > 0 ? 'h-[calc(100%-2.5rem)]' : 'h-full'} overflow-auto`}>
        {currentPage ? (
          renderPage()
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
            Select a file from the sidebar to get started
          </div>
        )}
      </div>
    </div>
  )
})

MainContent.displayName = 'MainContent'

export default MainContent

