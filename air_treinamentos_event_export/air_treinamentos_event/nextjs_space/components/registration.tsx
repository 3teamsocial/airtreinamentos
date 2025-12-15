
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Mail, Phone, CheckCircle, AlertCircle, Loader } from 'lucide-react'

export default function Registration() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setMessage('Inscrição realizada com sucesso! Entraremos em contato em breve.')
        setFormData({ name: '', email: '', phone: '' })
      } else {
        throw new Error('Falha ao enviar inscrição')
      }
    } catch (error) {
      setStatus('error')
      setMessage('Erro ao enviar inscrição. Tente novamente ou entre em contato conosco.')
    }
  }

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Garanta sua <span className="text-orange-600">Vaga</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato 
            para confirmar sua inscrição e fornecer mais detalhes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Formulário de Inscrição</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Nome Completo *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Seu nome completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email Corporativo *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="seu.email@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                  Telefone/WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="(21) 99999-9999"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Inscrever-se Agora</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800">{message}</p>
                </div>
              )}

              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800">{message}</p>
                </div>
              )}
            </form>

            <p className="text-xs text-slate-500 mt-4">
              * Campos obrigatórios. Suas informações serão utilizadas apenas para contato sobre a imersão 
              e não serão compartilhadas com terceiros.
            </p>
          </motion.div>

          {/* Registration Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="font-bold text-slate-800 mb-4">Próximos Passos:</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <p className="text-slate-700">Preencha o formulário ao lado</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <p className="text-slate-700">Receba contato de nossa equipe</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <p className="text-slate-700">Confirme sua participação e pagamento</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <p className="text-slate-700">Receba informações sobre local e materiais</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-xl text-white">
              <h4 className="font-bold mb-4">Informações de Contato</h4>
              <div className="space-y-3">
                <p className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Contato@airtreinamentos.com</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+55 (21) 98552-1685</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+55 (21) 99799-1685</span>
                </p>
              </div>
              <p className="text-orange-100 text-sm mt-4">
                Respondemos todas as inscrições em até 24 horas úteis
              </p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
              <h4 className="font-bold text-slate-800 mb-3">Site Oficial</h4>
              <p className="text-slate-700 mb-3">
                Para mais informações, visite nosso site oficial:
              </p>
              <a 
                href="http://workshop.compressores.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                workshop.compressores.com.br
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
