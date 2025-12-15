
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, BookOpen, Users, Wrench } from 'lucide-react'

export default function Speakers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const speakers = [
    {
      name: "Oscar Redivo",
      role: "Especialista Sênior em Ar Comprimido e Gases Industriais",
      experience: "30+ anos",
      image: "https://cdn.abacus.ai/images/8ab29822-54c7-40a9-9f8d-5106eaf00afe.png",
      description: "Especialista sênior com mais de 30 anos de experiência em geração e tratamento de ar comprimido e gases industriais. Formado em Administração (FMU) e Mecânica de Manutenção (SENAI), atua desde dimensionamento, especificação e implantação até startup de sistemas completos — incluindo compressores, secadores, filtração e geração de gases (N2, O2, H2). Fundador da Ar & Gás Compressores, com histórico executivo em grandes empresas do setor, conduzindo soluções turnkey e estruturação de redes de distribuidores.",
      highlights: [
        "30+ anos em ar comprimido e gases industriais",
        "Administração (FMU) e Mecânica SENAI",
        "Fundador Ar & Gás Compressores",
        "Projetos turnkey e geração de gases N2/O2/H2"
      ]
    },
    {
      name: "Roberto Mendes",
      role: "Especialista em Manutenção e Eficiência Energética",
      experience: "40 anos",
      image: "https://cdn.abacus.ai/images/2a1d1e19-4780-4ad5-b371-3e543ecfd9d4.png",
      description: "Com 40 anos no setor de ar comprimido, iniciou sua carreira na Wayne Dresser Compressores, a maior fabricante de compressores da América Latina, participando do desenvolvimento dos primeiros compressores de parafuso, tecnologia pioneira desenvolvida pela Wayne Dresser. Formação técnica em Mecânica, lidera projetos de manutenção, retrofit e eficiência energética em compressores rotativos de parafuso, pistão e scroll, além de sistemas de tratamento e redes de distribuição. Especialista em conformidade NR-13, alcança reduções de 10-25% no consumo energético e aumenta confiabilidade operacional com foco em TCO e indicadores de desempenho.",
      highlights: [
        "40 anos liderando projetos industriais",
        "Iniciou carreira na Wayne Dresser Compressores",
        "Desenvolvimento dos primeiros compressores de parafuso",
        "Redução 10-25% consumo energético e conformidade NR-13"
      ]
    },
    {
      name: "Vandeir Mendes",
      role: "Consultor em Sistemas de Ar Comprimido e Eficiência Energética",
      experience: "34 anos",
      image: "https://cdn.abacus.ai/images/415aab43-569e-48ab-8f52-dfd8dd59aa8e.png",
      description: "Consultor técnico e comercial com 34 anos de experiência em sistemas de ar comprimido, eficiência energética e gestão de ativos críticos. Base técnica sólida construída em projetos industriais de alto risco sob normas rigorosas (AWS, API, ASME, NR-13, ISO 8573). Utiliza ferramentas avançadas de medição para diagnóstico e otimização, gerando reduções de 10-30% no TCO e consumo específico (kW/m³). Líder de alta performance, traduz temas técnicos complexos em resultados financeiros e operacionais.",
      highlights: [
        "34 anos em ar comprimido e ativos críticos",
        "Normas AWS, API, ASME, NR-13, ISO 8573",
        "Redução 10-30% TCO e consumo energético",
        "Vendas consultivas e liderança técnica"
      ]
    },
    {
      name: "Luciano Maffeis",
      role: "Especialista em Sistemas de Ar Comprimido, Normas e Confiabilidade",
      experience: "Mais de 20 anos",
      image: "https://cdn.abacus.ai/images/97840bd0-41c3-4827-84bd-f4cfa0399427.png",
      description: "Engenheiro Informático especializado em Segurança da Informação, com mais de 20 anos dedicados à manutenção, desempenho e gestão de sistemas pneumáticos industriais. Possui 10 anos de experiência em normas e padronizações, atuando na criação, revisão e implementação de processos que elevam eficiência, segurança e confiabilidade. Com mais de 20 anos na indústria farmacêutica e experiência em SAP, conecta conhecimento técnico, qualidade, rastreabilidade e compliance regulatório.",
      highlights: [
        "Mais de 20 anos em sistemas pneumáticos industriais",
        "Engenheiro Informático especializado",
        "10 anos experiência em normas e padronizações",
        "Mais de 20 anos indústria farmacêutica e SAP"
      ]
    }
  ]

  const achievements = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "4 Especialistas",
      subtitle: "Time de Experts"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "124+ Anos",
      subtitle: "Experiência Combinada"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Certificações",
      subtitle: "ISO, NR-13, AWS, API"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "2000+",
      subtitle: "Projetos Realizados"
    }
  ]

  return (
    <section id="speakers" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Palestrantes <span className="text-orange-600">Especialistas</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Profissionais reconhecidos no mercado de ar comprimido com décadas 
            de experiência prática em grandes indústrias
          </p>
        </motion.div>

        {/* Achievements Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mx-auto mb-4">
                {achievement.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-1">{achievement.title}</h3>
              <p className="text-slate-600 text-sm">{achievement.subtitle}</p>
            </div>
          ))}
        </motion.div>

        {/* Speakers Cards */}
        <div className="space-y-16">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              className={`bg-white rounded-2xl shadow-xl overflow-hidden ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } lg:flex items-center`}
            >
              <div className="lg:w-1/2 relative aspect-video lg:aspect-square">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:hidden"></div>
              </div>

              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                      {speaker.experience}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-slate-800 mb-2">{speaker.name}</h3>
                  <p className="text-lg text-orange-600 font-semibold mb-4">{speaker.role}</p>
                </div>

                <p className="text-slate-600 leading-relaxed mb-6">{speaker.description}</p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800 mb-3">Principais Qualificações:</h4>
                  {speaker.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 bg-gradient-to-r from-blue-500 to-orange-500 p-8 rounded-2xl text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Experiência Prática Comprovada</h3>
          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Nossos especialistas já implementaram soluções em centenas de indústrias, 
            desde pequenas instalações até grandes complexos industriais, sempre com foco 
            em eficiência, conformidade e redução de custos operacionais.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
