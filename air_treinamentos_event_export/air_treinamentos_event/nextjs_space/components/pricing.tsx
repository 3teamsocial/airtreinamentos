
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Check, Star, Calendar, FileText } from 'lucide-react'

export default function Pricing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const includes = [
    "8 horas de treinamento intensivo",
    "Apostila completa em PDF",
    "4 planilhas Excel especializadas", 
    "Checklists de conformidade e projeto",
    "Checklist qualidade ISO 8573",
    "Tabela requisitos por setor",
    "Guia seleção de compressores",
    "Certificado de participação",
    "Coffee breaks e almoço inclusos",
    "Material de referência técnica"
  ]

  const scrollToRegistration = () => {
    const element = document.getElementById('registration')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Investimento no <span className="text-orange-600">seu Futuro</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Valor único que inclui todo o conteúdo técnico, materiais práticos 
            e certificação profissional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl shadow-2xl text-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

            <div className="relative">
              <div className="flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-yellow-300 mr-2" />
                <span className="text-lg font-semibold">Oferta Especial</span>
                <Star className="w-8 h-8 text-yellow-300 ml-2" />
              </div>

              <div className="text-center mb-8">
                <div className="mb-4">
                  <span className="text-5xl font-bold">R$ 1.500</span>
                  <span className="text-xl">,00</span>
                </div>
                <p className="text-orange-100 text-lg">Por pessoa | Pagamento único</p>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-bold text-center mb-6">Tudo Incluso:</h3>
                <div className="grid gap-3">
                  {includes.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span className="text-orange-50">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-orange-400">
                  <p className="text-orange-100 text-sm text-center">
                    + {includes.length - 5} benefícios adicionais inclusos
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToRegistration}
                className="w-full bg-white text-orange-600 py-4 px-6 rounded-xl font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
              >
                Garantir Minha Vaga
              </button>

              <p className="text-orange-100 text-sm text-center mt-4">
                Vagas limitadas • Inscrições até esgotar
              </p>
            </div>
          </div>
        </motion.div>

        {/* Complete benefits list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-slate-50 p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
            Lista Completa de Benefícios
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {includes.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-4">
              <Calendar className="w-6 h-6 text-orange-600" />
              <h4 className="font-semibold text-slate-800">Data & Local</h4>
            </div>
            <div className="space-y-2 text-slate-600">
              <p><strong>Data:</strong> 6 e 7 de Fevereiro de 2026</p>
              <p><strong>Horário:</strong> 2 dias completos (16h totais)</p>
              <p><strong>Local:</strong> Rio de Janeiro (a confirmar)</p>
              <p><strong>Credenciamento:</strong> A partir das 8h30</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-4">
              <FileText className="w-6 h-6 text-orange-600" />
              <h4 className="font-semibold text-slate-800">Informações Importantes</h4>
            </div>
            <div className="space-y-2 text-slate-600">
              <p>• Certificado será entregue ao final</p>
              <p>• Materiais digitais enviados por email</p>
              <p>• Refeições inclusas no valor</p>
              <p>• Ambiente climatizado e equipado</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
