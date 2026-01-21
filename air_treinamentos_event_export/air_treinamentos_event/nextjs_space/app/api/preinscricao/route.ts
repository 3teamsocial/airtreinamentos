import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { nome, email, celular } = await req.json()

  if (!nome || !email || !celular) {
    return NextResponse.json(
      { error: 'Dados incompletos' },
      { status: 400 }
    )
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'Air Treinamentos <onboarding@resend.dev>',
      to: ['Contato@airtreinamentos.com'],
      subject: 'Nova pré-inscrição – Imersão Estratégica',
      html: `
        <h2>Nova pré-inscrição</h2>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Celular:</strong> ${celular}</p>
      `,
    }),
  })

  if (!res.ok) {
    return NextResponse.json(
      { error: 'Erro ao enviar email' },
      { status: 500 }
    )
  }

  return NextResponse.json({ success: true })
}
