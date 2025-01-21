'use client'
import React, { useState } from 'react'
import { File, Search, Github, Bug, Package, Mail, ChevronRight, ChevronDown, Linkedin, Twitter, Instagram, Menu, X as XIcon } from 'lucide-react'
import ContactForm from './ContactForm'

type FolderItem = {
  name: string
  items: { name: string, type: PageType }[]
}

type PageType = 'Introduction' | 'Skills' | 'Experience' | 'Bio' | 'Education' | 'Certifications' |
  'Overview' | 'Culture' | 'Values' | 'Portfolio' | 'WebApps' | 'MobileApps'

const folders: FolderItem[] = [
  { 
    name: 'Home', 
    items: [
      { name: 'Introduction', type: 'Introduction' },
      { name: 'Skills', type: 'Skills' },
      { name: 'Experience', type: 'Experience' }
    ] 
  },
  { 
    name: 'About', 
    items: [
      { name: 'Bio', type: 'Bio' },
      { name: 'Education', type: 'Education' },
      { name: 'Certifications', type: 'Certifications' }
    ] 
  },
  {
    name: 'Company',
    items: [
      { name: 'Overview', type: 'Overview' },
      { name: 'Culture', type: 'Culture' },
      { name: 'Values', type: 'Values' }
    ]
  },
  {
    name: 'Projects',
    items: [
      { name: 'Portfolio', type: 'Portfolio' },
      { name: 'WebApps', type: 'WebApps' },
      { name: 'MobileApps', type: 'MobileApps' }
    ]
  }
]

interface SidebarProps {
  isCollapsed: boolean;
  toggleSidebar: () => void; // Add toggleSidebar to props
  onFileClick: (pageType: PageType) => void;
  onGitHubClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, toggleSidebar, onFileClick, onGitHubClick }) => {
  const [expandedFolders, setExpandedFolders] = useState<string[]>([])
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>('File Explorer')
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev =>
      prev.includes(folderName)
        ? prev.filter(name => name !== folderName)
        : [...prev, folderName]
    )
  }

  const toggleSection = (sectionName: string) => {
    setActiveSection(prev => prev === sectionName ? null : sectionName)
  }

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    toggleSidebar() // Use toggleSidebar here
  }

  const sidebarContent = (
    <div className="flex-grow overflow-y-auto">
      <nav className="p-2">
        <ul className="space-y-2">
          <li>
            <button 
              className={`w-full flex items-center p-2 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200 
                ${activeSection === 'File Explorer' ? 'bg-gray-200 dark:bg-[#37373d]' : ''}`}
              onClick={() => toggleSection('File Explorer')}
            >
              <File size={18} className="mr-2" />
              <span className={isCollapsed ? 'hidden' : ''}>File Explorer</span>
            </button>
          </li>
          <li>
            <button 
              className={`w-full flex items-center p-2 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200 
                ${activeSection === 'Search' ? 'bg-gray-200 dark:bg-[#37373d]' : ''}`}
              onClick={() => toggleSection('Search')}
            >
              <Search size={18} className="mr-2" />
              <span className={isCollapsed ? 'hidden' : ''}>Search</span>
            </button>
          </li>
          <li>
            <button 
              className={`w-full flex items-center p-2 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200 
                ${activeSection === 'GitHub' ? 'bg-gray-200 dark:bg-[#37373d]' : ''}`}
              onClick={() => {
                toggleSection('GitHub')
                onGitHubClick()
              }}
            >
              <Github size={18} className="mr-2" />
              <span className={isCollapsed ? 'hidden' : ''}>GitHub</span>
            </button>
          </li>
          <li>
            <button 
              className={`w-full flex items-center p-2 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200 
                ${activeSection === 'Bug Finder' ? 'bg-gray-200 dark:bg-[#37373d]' : ''}`}
              onClick={() => toggleSection('Bug Finder')}
            >
              <Bug size={18} className="mr-2" />
              <span className={isCollapsed ? 'hidden' : ''}>Bug Finder</span>
            </button>
          </li>
          <li>
            <button 
              className={`w-full flex items-center p-2 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200 
                ${activeSection === 'Extensions' ? 'bg-gray-200 dark:bg-[#37373d]' : ''}`}
              onClick={() => toggleSection('Extensions')}
            >
              <Package size={18} className="mr-2" />
              <span className={isCollapsed ? 'hidden' : ''}>Extensions</span>
            </button>
          </li>
          <li>
            <button 
              className="w-full flex items-center p-2 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200"
              onClick={() => setIsContactFormOpen(true)}
            >
              <Mail size={18} className="mr-2" />
              <span className={isCollapsed ? 'hidden' : ''}>Contact</span>
            </button>
          </li>
        </ul>
      </nav>
      {activeSection === 'File Explorer' && !isCollapsed && (
        <div className="p-2 border-t border-gray-200 dark:border-[#3c3c3c] transition-colors duration-200">
          <h2 className="text-xs uppercase text-gray-500 dark:text-[#6c6c6c] mb-2 transition-colors duration-200">File Structure</h2>
          <ul className="space-y-1">
            {folders.map((folder) => (
              <li key={folder.name}>
                <button
                  onClick={() => toggleFolder(folder.name)}
                  className="w-full flex items-center p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200"
                >
                  {expandedFolders.includes(folder.name) ? (
                    <ChevronDown size={16} className="mr-1" />
                  ) : (
                    <ChevronRight size={16} className="mr-1" />
                  )}
                  <span>{folder.name}</span>
                </button>
                {expandedFolders.includes(folder.name) && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {folder.items.map((item) => (
                      <li key={item.name}>
                        <button 
                          onClick={() => onFileClick(item.type)}
                          className="w-full flex items-center p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200"
                        >
                          <File size={16} className="mr-2" />
                          <span>{item.name}.tsx</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )

  const socialLinks = (
    <div className="p-2 border-t border-gray-200 dark:border-[#3c3c3c] transition-colors duration-200">
      {!isCollapsed && (
        <h2 className="text-xs uppercase text-gray-500 dark:text-[#6c6c6c] mb-2 transition-colors duration-200">
          Social Links
        </h2>
      )}
      <div className={`flex ${isCollapsed ? 'flex-col space-y-4' : 'justify-around'}`}>
        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#cccccc] dark:hover:text-white transition-colors duration-200">
          <Linkedin size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#cccccc] dark:hover:text-white transition-colors duration-200">
          <Twitter size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#cccccc] dark:hover:text-white transition-colors duration-200">
          <Instagram size={20} />
        </a>
        <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-[#cccccc] dark:hover:text-white transition-colors duration-200">
          <Github size={20} />
        </a>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={handleMobileMenuToggle}
        className="fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-100 dark:bg-[#2d2d2d] md:hidden"
      >
        {isMobileMenuOpen ? <XIcon size={24} /> : <Menu size={24} />}
      </button>
      {/* Mobile Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 bg-gray-100 dark:bg-[#252526] text-gray-800 dark:text-[#cccccc] w-64 flex flex-col transition-all duration-300 transform md:hidden
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {sidebarContent}
        {socialLinks}
      </aside>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col bg-gray-100 dark:bg-[#252526] text-gray-800 dark:text-[#cccccc] transition-all duration-300
          ${isCollapsed ? 'w-16' : 'w-64'}`}
      >
        {sidebarContent}
        {socialLinks}
      </aside>
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </>
  )
}

export default Sidebar