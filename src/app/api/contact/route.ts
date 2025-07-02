// /api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import mongoose from 'mongoose';
import { createContact } from '@/domain/spi';

const MONGO_URI = process.env.MONGO_URI!;

async function connectDatabase() {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(MONGO_URI);
  }
}

export async function POST(req: NextRequest) {
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
    contactPreference
  });

  if (result.isErr()) {
    return NextResponse.json({ error: result.error.message }, { status: 500 });
  }

  return NextResponse.json(result.value, { status: 201 });
}
