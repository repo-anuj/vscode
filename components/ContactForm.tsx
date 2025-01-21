'use client'

import React, { useState } from 'react'
import { X, Plus, Split, Trash2, Maximize2, ChevronDown } from 'lucide-react'

interface FormData {
  email: string
  name: string
  message: string
}

type FormField = keyof FormData

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

const ContactForm: React.FC<ContactFormProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({ email: '', name: '', message: '' })
  const [submissions, setSubmissions] = useState<FormData[]>([])

  const questions = [
    "Hey there! We&apos;re excited to link 🔗\nTo start, could you give us your email?",
    "Awesome! And what&apos;s your name?",
    "Perfect, and how can we help you?"
  ]

  const formFields: FormField[] = ['email', 'name', 'message']

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [formFields[step]]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 2) {
      setStep(step + 1)
    } else {
      setSubmissions([...submissions, formData])
      setFormData({ email: '', name: '', message: '' })
      setStep(0)
    }
  }

  const handleRestart = () => {
    setFormData({ email: '', name: '', message: '' })
    setStep(0)
  }

  if (!isOpen) return null

  const tabs = ['OUTPUT', 'PROBLEMS', 'DEBUG CONSOLE', 'TERMINAL', 'PORTS', 'GITLENS', 'COMMENTS']

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center sm:items-center">
      <div className="bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-white w-full max-w-4xl rounded-t-lg sm:rounded-lg shadow-lg overflow-hidden transition-colors duration-200">
        {/* Tab bar */}
        <div className="flex items-center bg-gray-100 dark:bg-[#252526] border-b border-gray-200 dark:border-[#3c3c3c] text-gray-600 dark:text-[#969696] text-sm transition-colors duration-200">
          <div className="flex-1 flex overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-3 py-2 whitespace-nowrap transition-colors duration-200 ${
                  tab === 'TERMINAL' 
                    ? 'bg-white dark:bg-[#1e1e1e] text-gray-800 dark:text-white' 
                    : 'hover:bg-gray-200 dark:hover:bg-[#2d2d2d]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="flex items-center px-2 space-x-1">
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded flex items-center text-gray-600 dark:text-[#cccccc] transition-colors duration-200">
              <span className="mr-1">pwsh</span>
              <ChevronDown size={14} />
            </button>
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200">
              <Plus size={14} />
            </button>
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200">
              <Split size={14} />
            </button>
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200">
              <Trash2 size={14} />
            </button>
            <button className="p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200">
              <Maximize2 size={14} />
            </button>
            <button onClick={onClose} className="p-1 hover:bg-gray-200 dark:hover:bg-[#2d2d2d] rounded transition-colors duration-200">
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Terminal content */}
        <div className="p-4 h-[400px] overflow-y-auto font-mono text-sm backdrop-blur-md bg-opacity-100">
          {submissions.map((submission, index) => (
            <div key={index} className="mb-4">
              <p className="text-green-600 dark:text-green-400 transition-colors duration-200">Submission {index + 1} received successfully!</p>
              <p className="text-gray-600 dark:text-[#cccccc] transition-colors duration-200">$ email: {submission.email}</p>
              <p className="text-gray-600 dark:text-[#cccccc] transition-colors duration-200">$ name: {submission.name}</p>
              <p className="text-gray-600 dark:text-[#cccccc] transition-colors duration-200">$ message: {submission.message}</p>
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="space-y-2">
            <p className="text-gray-600 dark:text-[#cccccc] whitespace-pre-line transition-colors duration-200">{questions[step]}</p>
            {step < 2 ? (
              <input
                type={step === 0 ? 'email' : 'text'}
                value={formData[formFields[step]]}
                onChange={handleInput}
                className="w-full bg-transparent border-b border-gray-200 dark:border-[#3c3c3c] outline-none focus:border-blue-500 dark:focus:border-[#007acc] text-gray-800 dark:text-[#cccccc] transition-colors duration-200"
                required
              />
            ) : (
              <textarea
                value={formData.message}
                onChange={handleInput}
                className="w-full bg-transparent border border-gray-200 dark:border-[#3c3c3c] outline-none focus:border-blue-500 dark:focus:border-[#007acc] text-gray-800 dark:text-[#cccccc] min-h-[80px] p-2 transition-colors duration-200"
                required
              />
            )}
            
            {step === 2 && (
              <div className="mt-4 text-gray-600 dark:text-[#cccccc] transition-colors duration-200">
                <p>Beautiful! Here&apos;s what we&apos;ve got:</p>
                <p>$ email: {formData.email}</p>
                <p>$ name: {formData.name}</p>
                <p>$ message: {formData.message}</p>
                <p>Look good?</p>
                <div className="flex space-x-4 mt-2">
                  <button type="button" onClick={handleRestart} className="text-blue-600 dark:text-[#007acc] hover:underline transition-colors duration-200">
                    [Restart]
                  </button>
                  <button type="submit" className="text-blue-600 dark:text-[#007acc] hover:underline transition-colors duration-200">
                    [Send it!]
                  </button>
                </div>
              </div>
            )}
            {step < 2 && (
              <button type="submit" className="text-blue-600 dark:text-[#007acc] hover:underline transition-colors duration-200">
                [Enter] →
              </button>
            )}
          </form>

          {/* Command prompt */}
          <div className="mt-4">
            <span className="text-gray-400 dark:text-[#3c3c3c] transition-colors duration-200">PS </span>
            <span className="text-gray-600 dark:text-[#cccccc] transition-colors duration-200">Portfolio{'>'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm

