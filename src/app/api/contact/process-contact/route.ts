import { verifySignatureAppRouter } from '@upstash/qstash/nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { connectDatabase } from '@/infrastructure/database/db';
import { createContact } from '@/domain/spi';

export const POST = verifySignatureAppRouter(async (req: NextRequest) => {
  try {
    const data = await req.json();
    await connectDatabase();

    const result = await createContact.execute(data);

    if (result.isErr()) {
      console.error('Erro ao salvar contato:', result.error.message);
      return NextResponse.json({ error: result.error.message }, { status: 500 });
    }

    console.log('Contato salvo no MongoDB');
    return NextResponse.json({ status: 'Contato salvo' }, { status: 201 });
  } catch (error) {
    console.error('Erro interno no process-contact:', error);
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 });
  }
});