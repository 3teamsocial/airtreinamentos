
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, MapPin, Users, Award } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full bg-slate-900">
          <Image
            src="https://cdn.abacus.ai/images/4901677d-43f9-4627-9037-826835d2cb5b.png"
            alt="Modern Industrial Compressor Room"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/60" />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Imersão <span className="text-orange-500">Ar Comprimido</span>
              <br />sem Desperdício
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light max-w-3xl mx-auto">
              Dois dias de imersão intensiva com os melhores profissionais do mercado
            </p>
            <p className="text-lg md:text-xl text-orange-300 font-medium max-w-3xl mx-auto">
              Sua oportunidade de crescimento e aquisição de conhecimento técnico especializado em ar comprimido industrial
            </p>
          </div>

          {/* Event Info Cards */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <Calendar className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Data</h3>
              <p className="text-blue-100 text-sm">6 e 7 de Fevereiro<br />2026</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Local</h3>
              <p className="text-blue-100 text-sm">Rio de Janeiro<br />A confirmar</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <Users className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Duração</h3>
              <p className="text-blue-100 text-sm">2 Dias Completos<br />16 horas totais</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
            >
              <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <h3 className="font-semibold text-white mb-2">Certificado</h3>
              <p className="text-blue-100 text-sm">Incluso<br />+ Materiais</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
