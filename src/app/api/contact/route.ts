import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import Contact from '@/lib/models/contact'; // Caminho relativo ajustado
import { sendEmail } from '@/lib/sendEmail';

const MONGO_URI = process.env.MONGO_URI!;

async function connectDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
  }
}

export async function POST(req: NextRequest) {
  await connectDatabase();

  const data = await req.json();

  const {
    name,
    phone,
    email,
    subject = '',
    message,
    vehicleBrand = '',
    vehicleModel = '',
    vehicleYear = '',
    contactPreference = ''
  } = data;

  if (!name || !phone || !email || !message) {
    return NextResponse.json(
      { error: 'Campos obrigatórios faltando.' },
      { status: 400 }
    );
  }

  try {
    const newContact = new Contact({
      name,
      phone,
      email,
      subject,
      message,
      vehicleBrand,
      vehicleModel,
      vehicleYear,
      contactPreference
    });

    const savedContact = await newContact.save();

    sendEmail(data).catch((error) => {
      console.error('Erro ao enviar email:', error);
    });

    return NextResponse.json(savedContact, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar contato:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor.' },
      { status: 500 }
    );
  }
}
