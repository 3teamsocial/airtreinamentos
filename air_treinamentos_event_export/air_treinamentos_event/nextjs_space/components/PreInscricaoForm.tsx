'use client'

import { useState } from 'react'

export default function PreInscricaoForm() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const payload = {
      nome: formData.get('nome'),
      email: formData.get('email'),
      celular: formData.get('celular'),
    }

    await fetch('/api/pre-inscricao', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    window.location.href =
      'https://www.e-inscricao.com/air-treinamentos/imersaoestrategica#payment-information-section'
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto my-[15px] max-w-md space-y-4 rounded-2xl bg-white p-6 shadow-lg"
    >
      <h2 className="text-center text-xl font-semibold text-gray-900">
        Garanta sua vaga
      </h2>

      <input
        name="nome"
        type="text"
        required
        placeholder="Nome completo"
        className="w-full rounded-lg border px-4 py-2"
      />

      <input
        name="email"
        type="email"
        required
        placeholder="E-mail"
        className="w-full rounded-lg border px-4 py-2"
      />

      <input
        name="celular"
        type="tel"
        required
        placeholder="Celular / WhatsApp"
        className="w-full rounded-lg border px-4 py-2"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-black py-3 text-white disabled:opacity-50"
      >
        {loading ? 'Enviando…' : 'Continuar inscrição'}
      </button>
    </form>
  )
}
