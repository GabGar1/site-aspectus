import { NextRequest, NextResponse } from 'next/server';
import { connectDatabase } from '@/infrastructure/database/db';
import { createContact } from '@/domain/spi';

export const POST = (async (req: NextRequest) => {
  try {
    console.log('Requisição recebida');

    const data = await req.json();
    console.log('JSON recebido:', data);

    console.log('Conectando ao Mongo...');
    await connectDatabase();
    console.log('Conectado ao Mongo!');

    const result = await createContact.execute(data);
    console.log('Resultado do createContact:', result);

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