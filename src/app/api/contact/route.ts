import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@upstash/qstash';
import { getBaseUrl } from '@/utils/getBaseUrl';

const qstash = new Client({
  token: process.env.QSTASH_TOKEN!,
})
export async function POST(req: NextRequest) {
  const data = await req.json();

  const baseUrl = getBaseUrl();

  console.log('🔁 Enviando para:', `${baseUrl}/api/contact/process-contact`);
  await qstash.publishJSON({
    url: `${baseUrl}/api/contact/process-contact`,
    body: data,
  });

  await qstash.publishJSON({
    url: `${baseUrl}/api/contact/send-email`,
    body: data,
  });

  return NextResponse.json({ status: 'enfileirado' })

}
