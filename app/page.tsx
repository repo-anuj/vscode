'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import MainContent, { MainContentRef } from '../components/MainContent'
import Footer from '../components/Footer'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React from 'react'

type PageType = 'Introduction' | 'Skills' | 'Experience' | 'Bio' | 'Education' | 'Certifications' |
  'Overview' | 'Culture' | 'Values' | 'Portfolio' | 'WebApps' | 'MobileApps'

export default function Home() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const mainContentRef = React.useRef<MainContentRef>(null)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const handleFileClick = (pageType: PageType) => {
    if (mainContentRef.current) {
      mainContentRef.current.openTab(pageType)
    }
  }

  const handleGitHubClick = () => {
    if (mainContentRef.current) {
      mainContentRef.current.showGitHub()
    }
  }

  return (
    <div className="h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-grow flex overflow-hidden relative">
        <Sidebar 
          isCollapsed={isSidebarCollapsed} 
          toggleSidebar={toggleSidebar}
          onFileClick={handleFileClick}
          onGitHubClick={handleGitHubClick}
        />
        
        {/* Collapse Toggle Button (Desktop only) */}
        <button
          onClick={toggleSidebar}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 items-center justify-center w-6 h-12 bg-gray-100 dark:bg-[#252526] hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded-r transition-all duration-300"
          style={{
            left: isSidebarCollapsed ? '64px' : '256px',
          }}
        >
          {isSidebarCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-[#cccccc]" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-[#cccccc]" />
          )}
        </button>

        {/* Main Content */}
        <div className="flex-grow flex flex-col overflow-hidden">
          <main 
            className={`flex-grow overflow-auto transition-all duration-300 md:pl-0
              ${isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64'}`}
          >
            <MainContent ref={mainContentRef} />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  )
}

