
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Email inválido' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const existingRegistration = await prisma.registration.findFirst({
      where: { email: email.toLowerCase() }
    });

    if (existingRegistration) {
      return NextResponse.json(
        { success: false, error: 'Este email já está registrado para a imersão' },
        { status: 409 }
      );
    }

    // Create new registration
    const registration = await prisma.registration.create({
      data: {
        name: name.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Inscrição realizada com sucesso! Nossa equipe entrará em contato em breve.',
      registrationId: registration.id
    });

  } catch (error) {
    console.error('Erro ao processar inscrição:', error);
    return NextResponse.json(
      { success: false, error: 'Erro interno do servidor. Tente novamente.' },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
