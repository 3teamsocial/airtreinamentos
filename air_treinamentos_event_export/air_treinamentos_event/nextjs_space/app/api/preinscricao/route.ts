import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  const { nome, email, celular } = await req.json()

  if (!nome || !email || !celular) {
    return NextResponse.json(
      { error: 'Dados incompletos' },
      { status: 400 }
    )
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: `"Pré-Inscrição Air Treinamentos" <${process.env.SMTP_USER}>`,
    to: 'Contato@airtreinamentos.com',
    subject: 'Nova pré-inscrição – Imersão Estratégica',
    html: `
      <h2>Nova pré-inscrição recebida</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Celular:</strong> ${celular}</p>
    `,
  })

  return NextResponse.json({ success: true })
}
