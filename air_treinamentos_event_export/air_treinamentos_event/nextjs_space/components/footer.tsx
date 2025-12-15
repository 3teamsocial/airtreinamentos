
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-3 gap-8 items-center"
        >
          {/* Air Treinamentos Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold">Air Treinamentos</h3>
              <p className="text-slate-400">Especialistas em Ar Comprimido</p>
            </div>
            <p className="text-slate-300 text-sm">
              Imersão especializada em sistemas de ar comprimido industrial, 
              focada em eficiência, conformidade e redução de custos.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="mailto:Contato@airtreinamentos.com"
                className="flex items-center space-x-2 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Contato@airtreinamentos.com</span>
              </a>
              <a 
                href="tel:+5521985521685"
                className="flex items-center space-x-2 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+55 (21) 98552-1685</span>
              </a>
              <a 
                href="tel:+5521997991685"
                className="flex items-center space-x-2 text-slate-300 hover:text-orange-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>+55 (21) 99799-1685</span>
              </a>
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-4 h-4" />
                <span>Rio de Janeiro, RJ</span>
              </div>
            </div>
          </div>

          {/* Air Center Logo */}
          <div className="space-y-4 lg:text-right">
            <p className="text-slate-400 text-sm">Uma realização</p>
            <div className="flex items-center justify-end space-x-4">
              <div>
                <h4 className="font-semibold">Air Center Compressores</h4>
                <p className="text-slate-400 text-sm">Holding Company</p>
              </div>
              <div className="relative w-16 h-16">
                <Image
                  src="/air-center-logo.png"
                  alt="Air Center Compressores"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-slate-700 mt-8 pt-8 text-center"
        >
          <p className="text-slate-400 text-sm">
            © 2025 Air Treinamentos. Todos os direitos reservados.
          </p>
          <p className="text-slate-500 text-xs mt-2">
            Imersão Ar Comprimido sem Desperdício • 6 e 7 de Fevereiro de 2026 • Rio de Janeiro
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
