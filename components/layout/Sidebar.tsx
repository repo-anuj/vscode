'use client'

import { ChevronDown, ChevronRight, File, Folder } from 'lucide-react'
import { useState } from 'react'

interface FolderItem {
  name: string
  type: 'folder' | 'file'
  items?: FolderItem[]
}

interface SidebarProps {
  isOpen: boolean
  onFileClick: (file: string) => void
}

const folders: FolderItem[] = [
  {
    name: 'About',
    type: 'folder',
    items: [
      { name: 'Introduction', type: 'file' },
      { name: 'Bio', type: 'file' },
    ],
  },
  {
    name: 'Skills',
    type: 'folder',
    items: [
      { name: 'Technical', type: 'file' },
      { name: 'Soft Skills', type: 'file' },
    ],
  },
  {
    name: 'Experience',
    type: 'folder',
    items: [
      { name: 'Work History', type: 'file' },
      { name: 'Projects', type: 'file' },
    ],
  },
  {
    name: 'Education',
    type: 'folder',
    items: [
      { name: 'Degrees', type: 'file' },
      { name: 'Certifications', type: 'file' },
    ],
  },
]

const FolderTree = ({ item, depth = 0, onFileClick }: { item: FolderItem; depth?: number; onFileClick: (file: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    if (item.type === 'folder') {
      setIsOpen(!isOpen)
    } else {
      onFileClick(item.name)
    }
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className={`w-full text-left flex items-center gap-2 px-4 py-1 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors ${
          depth > 0 ? 'ml-4' : ''
        }`}
      >
        {item.type === 'folder' ? (
          <>
            {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            <Folder size={16} className="text-blue-500" />
          </>
        ) : (
          <>
            <span className="w-4" />
            <File size={16} className="text-gray-500" />
          </>
        )}
        <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
      </button>
      {isOpen && item.items && (
        <div className="border-l border-[#0078d4]/20 ml-6">
          {item.items.map((subItem) => (
            <FolderTree key={subItem.name} item={subItem} depth={depth + 1} onFileClick={onFileClick} />
          ))}
        </div>
      )}
    </div>
  )
}

const Sidebar = ({ isOpen, onFileClick }: SidebarProps) => {
  return (
    <div
      className={`w-64 bg-gray-50 dark:bg-[#1e1e1e] border-r border-[#0078d4]/30 transition-all duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Right border accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#0078d4]/30 via-[#0078d4]/10 to-[#0078d4]/30" />

      <div className="p-2">
        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 px-4">
          Explorer
        </div>
        {folders.map((folder) => (
          <FolderTree key={folder.name} item={folder} onFileClick={onFileClick} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar 