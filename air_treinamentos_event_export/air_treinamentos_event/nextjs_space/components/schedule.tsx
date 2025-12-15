
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Clock, Coffee, Utensils } from 'lucide-react'

export default function Schedule() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const schedule = [
    {
      time: "08:30 - 09:00",
      title: "Credenciamento e Abertura",
      description: "Recepção dos participantes e apresentação inicial",
      icon: <Clock className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "09:00 - 09:30", 
      title: "Revolução Industrial e Demanda",
      description: "Linha do tempo, drivers atuais (produtividade, energia, ESG) e aplicações modernas",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "09:30 - 10:15",
      title: "Qualidade do Ar ISO 8573",
      description: "Ponto de orvalho, partículas, óleo/aerossóis, classes por aplicação, filtros e secadores",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "10:15 - 10:30",
      title: "Coffee Break",
      description: "Pausa para networking e refreshments",
      icon: <Coffee className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "10:30 - 11:20",
      title: "Normas Técnicas e Conformidade",
      description: "ISO 8573, ISO 12500, NR-13, amostragem/ensaio, conformidade ambiental e sonora",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "11:20 - 12:15",
      title: "Projeto e Instalação",
      description: "Erros comuns, dimensionamentos corretos e demonstrações de instalações",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "12:15 - 13:30",
      title: "Almoço",
      description: "Intervalo para refeição e networking",
      icon: <Utensils className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "13:30 - 14:15",
      title: "Dimensionamento e Arquitetura",
      description: "Compressores, secadores, reservatórios, filtros, zonas de pureza",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "14:15 - 15:00",
      title: "Tipos de Compressores",
      description: "Pistão, parafuso (fixo/VSD), palhetas, centrífugo e guia de seleção técnica",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "15:00 - 15:15",
      title: "Coffee Break",
      description: "Segunda pausa para networking",
      icon: <Coffee className="w-5 h-5" />,
      type: "break"
    },
    {
      time: "15:15 - 16:00",
      title: "Vazamentos e Orquestração",
      description: "Ultrassom, teste noturno, priorização ROI, setpoints, sequenciamento",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "16:00 - 16:30",
      title: "Casos de Campo e Economia",
      description: "Falhas por baixa qualidade, casos de sucesso, TCO: reparar vs. investir",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    },
    {
      time: "16:30 - 17:00",
      title: "Segurança e Plano de 90 Dias",
      description: "Checklist final, exercício prático e estabelecimento de metas",
      icon: <Clock className="w-5 h-5" />,
      type: "session"
    }
  ]

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Programação <span className="text-orange-600">Completa</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Agenda estruturada com 8 horas de conteúdo técnico, demonstrações práticas 
            e exercícios aplicados
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 to-blue-500"></div>

          <div className="space-y-6">
            {schedule.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className={`relative flex items-start space-x-6 ${
                  item.type === 'break' 
                    ? 'bg-gradient-to-r from-orange-50 to-blue-50' 
                    : 'bg-white hover:bg-slate-50'
                } p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-2 w-4 h-4 rounded-full ${
                  item.type === 'break' ? 'bg-orange-500' : 'bg-blue-500'
                } border-4 border-white shadow-md`}></div>

                <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                  item.type === 'break' 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'bg-blue-100 text-blue-600'
                }`}>
                  {item.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="font-semibold text-slate-800">{item.title}</h3>
                    <span className={`text-sm font-medium ${
                      item.type === 'break' ? 'text-orange-600' : 'text-blue-600'
                    }`}>
                      {item.time}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl text-center"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Informações Importantes</h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Credenciamento</h4>
              <p className="text-slate-600">A partir das 8h30 no local do evento</p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-800 mb-2">Certificado</h4>
              <p className="text-slate-600">Será entregue ao final da imersão</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
