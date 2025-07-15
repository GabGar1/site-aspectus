import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@upstash/qstash';

const qstash = new Client({
  token: process.env.QSTASH_TOKEN!,
})
export async function POST(req: NextRequest) {
    const data = await req.json();

    const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://site-aspectus.vercel.app'
      : process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : 'http://localhost:3000';

    await qstash.publishJSON({
      url: `${baseUrl}/api/contact/process-contact`,
      body: data,
    });

    await qstash.publishJSON({
      url: `${baseUrl}/api/contact/send-email`,
      body: data,
    });

    return NextResponse.json({status: 'enfileirado'})
    
}
