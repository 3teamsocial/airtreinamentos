import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email inválido' },
        { status: 400 }
      )
    }

    const existingRegistration = await prisma.registration.findFirst({
      where: { email: email.toLowerCase() },
    })

    if (existingRegistration) {
      return NextResponse.json(
        { success: false, error: 'Email já cadastrado' },
        { status: 409 }
      )
    }

    const registration = await prisma.registration.create({
      data: {
        name,
        email: email.toLowerCase(),
        phone,
      },
    })

    return NextResponse.json({ success: true, data: registration })
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

