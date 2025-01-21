'use client'

const Footer = () => {
  return (
    <footer className="h-6 bg-[#007ACC] dark:bg-[#007ACC] text-white relative">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20" />

      <div className="max-w-6xl mx-auto h-full px-4 flex items-center justify-between text-xs">
        {/* Left section */}
        <div className="flex items-center gap-4">
          <span>🌐 Ready</span>
          <span>UTF-8</span>
        </div>

        {/* Right section */}
        <div className="flex items-center gap-4">
          <span>TypeScript React</span>
          <span>Ln 1, Col 1</span>
          <span>Spaces: 2</span>
        </div>
      </div>

      {/* Left border accent */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/20" />
      
      {/* Right border accent */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white/20" />
    </footer>
  )
}

export default Footer 