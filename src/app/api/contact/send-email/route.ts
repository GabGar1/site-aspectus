import { NextRequest, NextResponse } from 'next/server';
import { verifySignatureAppRouter } from '@upstash/qstash/nextjs';
import { EmailService } from '@/infrastructure/email/EmailService';
import { ICreateContact } from '@/domain/application/dtos/ICreateContact';

export const POST = verifySignatureAppRouter(async (req: NextRequest) => {
  try {
    const data: ICreateContact = await req.json();

    const emailService = new EmailService();
    await emailService.send(data);

    console.log('E-mail enviado com sucesso');
    return NextResponse.json({ status: 'E-mail enviado' }, { status: 200 });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
  }
});
