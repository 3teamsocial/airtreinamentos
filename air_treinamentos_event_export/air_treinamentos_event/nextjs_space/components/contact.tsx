
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, MapPin, Clock, Phone } from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="py-20 bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entre em <span className="text-orange-500">Contato</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Tem dúvidas sobre a imersão? Nossa equipe está pronta para ajudar 
            e fornecer todas as informações necessárias
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-700 p-8 rounded-2xl text-center hover:bg-slate-600 transition-colors"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-slate-300 mb-4">
              Para inscrições e informações sobre a imersão
            </p>
            <a 
              href="mailto:Contato@airtreinamentos.com"
              className="text-orange-400 hover:text-orange-300 font-semibold"
            >
              Contato@airtreinamentos.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-slate-700 p-8 rounded-2xl text-center hover:bg-slate-600 transition-colors"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Telefone</h3>
            <p className="text-slate-300 mb-4">
              Ligue ou envie mensagem via WhatsApp
            </p>
            <div className="space-y-2">
              <a 
                href="tel:+5521985521685"
                className="block text-orange-400 hover:text-orange-300 font-semibold"
              >
                +55 (21) 98552-1685
              </a>
              <a 
                href="tel:+5521997991685"
                className="block text-orange-400 hover:text-orange-300 font-semibold"
              >
                +55 (21) 99799-1685
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-slate-700 p-8 rounded-2xl text-center hover:bg-slate-600 transition-colors"
          >
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-4">Local do Evento</h3>
            <p className="text-slate-300 mb-4">
              Rio de Janeiro, RJ<br />
              Local será confirmado
            </p>
            <p className="text-orange-400 font-semibold">
              6 e 7 de Fevereiro de 2026<br />
              2 dias completos (16h totais)
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-blue-500 p-8 rounded-2xl text-center"
        >
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-white" />
            <h3 className="text-2xl font-bold">Atendimento</h3>
          </div>
          <p className="text-blue-100 text-lg">
            Respondemos todas as mensagens em até <strong>24 horas úteis</strong>
          </p>
          <p className="text-blue-200 mt-2">
            Segunda a Sexta: 8h00 às 18h00 | Sábado: 8h00 às 12h00
          </p>
        </motion.div>
      </div>
    </section>
  )
}
