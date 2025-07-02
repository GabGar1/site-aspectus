import { NextRequest, NextResponse } from 'next/server';
import { createContact } from '@/domain/spi';
import { connectDatabase } from '@/infrastructure/database/db';

export async function POST(req: NextRequest) {
  try {
    await connectDatabase();

    const data = await req.json();

    const { name, phone, email, subject = '', message, vehicleBrand = '', vehicleModel = '', vehicleYear = '', contactPreference = '' } = data;

    if (!name || !phone || !email || !message) {
      return NextResponse.json({ error: 'Campos obrigatórios faltando.' }, { status: 400 });
    }

    const result = await createContact.execute({
      name,
      phone,
      email,
      subject,
      message,
      vehicleBrand,
      vehicleModel,
      vehicleYear,
      contactPreference,
    });

    if (result.isErr()) {
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    return NextResponse.json(result.value, { status: 201 });
  } catch (error) {
    console.error('Erro na rota contact:', error);
    return NextResponse.json({ error: 'Erro interno no servidor' }, { status: 500 });
  }
}
