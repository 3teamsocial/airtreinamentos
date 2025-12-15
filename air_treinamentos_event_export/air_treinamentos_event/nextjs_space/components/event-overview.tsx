
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Zap, ShieldCheck, TrendingDown } from 'lucide-react'

export default function EventOverview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const benefits = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Redução de Custos",
      description: "Diminua o consumo energético (kWh/Nm³) e elimine vazamentos desnecessários"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Qualidade ISO 8573",
      description: "Garanta a pureza adequada para aplicações críticas como alimentos e fármacos"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Eficiência Operacional",
      description: "Evite paradas não programadas e aumente a confiabilidade dos sistemas"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Conformidade Técnica",
      description: "Atenda normas ambientais, sonoras e de segurança (NR-13)"
    }
  ]

  return (
    <section id="overview" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Sobre a <span className="text-orange-600">Imersão</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
            <strong className="text-orange-600">Dois dias completos de imersão presencial</strong> com os melhores profissionais do mercado, 
            focada na evolução e otimização de sistemas de ar comprimido.
          </p>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Esta é sua <strong>oportunidade única de crescimento profissional</strong> e aquisição de 
            <strong> conhecimento técnico especializado</strong>, abordando desde drivers atuais como energia e ESG 
            até implementação prática de soluções eficientes no dia a dia industrial.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://cdn.abacus.ai/images/7f844ea5-1cf1-43a2-afc0-bb4dbdf394ea.png"
                alt="Professional Training Environment"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-6">
              Por que participar?
            </h3>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">{benefit.title}</h4>
                    <p className="text-slate-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Público-Alvo</h3>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            <strong>Equipes de manutenção, engenharia, utilidades e confiabilidade</strong> de grandes indústrias 
            que buscam otimizar seus sistemas de ar comprimido e reduzir custos operacionais.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
