
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Settings, 
  Shield, 
  FileCheck, 
  Wrench, 
  BarChart3, 
  Cpu, 
  AlertTriangle, 
  BookOpen 
} from 'lucide-react'

export default function Topics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const mainTopics = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Evolução do Ar Comprimido",
      description: "Revolução industrial, aumento da demanda, drivers atuais (produtividade, energia, ESG) e aplicações modernas"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Qualidade do Ar ISO 8573",
      description: "Ponto de orvalho, partículas, óleo/aerossóis, classes por aplicação, filtros e secadores"
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Normas e Conformidade",
      description: "ISO 8573, ISO 12500, NR-13, amostragem/ensaio, conformidade ambiental e de ruído"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Projeto e Instalação",
      description: "Erros comuns, dimensionamentos, materiais, drenagem e demonstrações práticas"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Dimensionamento Correto",
      description: "Arquitetura por finalidade, escolha de equipamentos, zonas de pureza e polimento"
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tipos de Compressores",
      description: "Pistão, parafuso (fixo/VSD), palhetas, centrífugo e guia de seleção técnica"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Vazamentos e Otimização",
      description: "Detecção por ultrassom, priorização por ROI, sequenciamento e orquestração"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Casos Práticos",
      description: "Casos de campo, falhas por baixa qualidade, sucessos e análise de TCO"
    }
  ]

  const materials = [
    "Apostila completa em PDF",
    "4 Planilhas Excel especializadas",
    "Checklist de Conformidade e Projeto", 
    "Checklist de Qualidade ISO 8573",
    "Tabela de requisitos por setor",
    "Guia de seleção de compressores",
    "Certificado de participação",
    "Material de referência"
  ]

  return (
    <section id="topics" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Tópicos <span className="text-orange-600">Abordados</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            8 horas de conteúdo prático e teórico cobrindo todos os aspectos essenciais 
            dos sistemas de ar comprimido industrial
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mainTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                {topic.icon}
              </div>
              <h3 className="font-semibold text-slate-800 mb-3">{topic.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{topic.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/bf94c5de-4bd9-481f-a58b-54cc256fa81d.png"
                alt="Compressed Air System Diagram"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Materiais <span className="text-orange-600">Inclusos</span>
            </h3>
            <div className="space-y-3">
              {materials.map((material, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.05 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                  <span className="text-slate-700">{material}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
