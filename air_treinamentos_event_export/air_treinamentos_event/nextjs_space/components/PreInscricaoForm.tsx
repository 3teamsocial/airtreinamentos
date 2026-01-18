'use client'

import { useState } from 'react'

export default function PreInscricaoForm() {
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    // Redireciona para a página oficial de pagamento
    window.location.href =
      'https://www.e-inscricao.com/air-treinamentos/imersaoestrategica#payment-information-section'
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-4 rounded-2xl bg-white p-6 shadow-lg"
    >
      <h2 className="text-center text-xl font-semibold text-gray-900">
        Garanta sua vaga
      </h2>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Nome completo
        </label>
        <input
          type="text"
          required
          placeholder="Digite seu nome"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          E-mail
        </label>
        <input
          type="email"
          required
          placeholder="seu@email.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700">
          Celular
        </label>
        <input
          type="tel"
          required
          placeholder="(11) 99999-9999"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-black focus:outline-none"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black py-3 text-white transition hover:opacity-90 disabled:opacity-50"
      >
        {loading ? 'Redirecionando…' : 'Continuar inscrição'}
      </button>

      <p className="text-center text-xs text-gray-500">
        Você será redirecionado para a página segura de pagamento
      </p>
    </form>
  )
}
