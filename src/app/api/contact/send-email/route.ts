import { NextRequest, NextResponse } from 'next/server';
import { EmailService } from '@/infrastructure/email/EmailService';
import { ICreateContact } from '@/domain/application/dtos/ICreateContact';

export async function POST(req: NextRequest) {
  const data: ICreateContact = await req.json();

  try {
    const emailService = new EmailService();
    await emailService.send(data);
    return NextResponse.json({ message: 'Email enviado com sucesso' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json({ error: 'Erro ao enviar email' }, { status: 500 });
  }
}
