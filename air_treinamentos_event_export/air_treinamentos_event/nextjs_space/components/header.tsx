
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/air-treinamentos-logo.png"
                alt="Air Treinamentos Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-semibold text-slate-800">Air Treinamentos</h1>
              <p className="text-sm text-slate-600">Imersão Ar Comprimido</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            <button onClick={() => scrollToSection('overview')} className="text-slate-700 hover:text-orange-600 transition-colors">Sobre</button>
            <button onClick={() => scrollToSection('topics')} className="text-slate-700 hover:text-orange-600 transition-colors">Tópicos</button>
            <button onClick={() => scrollToSection('speakers')} className="text-slate-700 hover:text-orange-600 transition-colors">Palestrantes</button>
            <button onClick={() => scrollToSection('contact')} className="text-slate-700 hover:text-orange-600 transition-colors">Contato</button>
          </nav>

          <div className="flex lg:hidden items-center space-x-3 text-sm text-slate-600">
            <a href="tel:+5521985521685" className="flex items-center space-x-1 hover:text-orange-600 transition-colors">
              <Phone className="w-4 h-4" />
            </a>
            <a href="mailto:Contato@airtreinamentos.com" className="flex items-center space-x-1 hover:text-orange-600 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
