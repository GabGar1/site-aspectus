import { NextRequest, NextResponse } from 'next/server';
import { Client } from '@upstash/qstash';

const qstash = new Client({
  token: process.env.QSTASH_TOKEN!,
})
export async function POST(req: NextRequest) {
    const data = await req.json();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL!;

    await qstash.publishJSON({
      url: `${baseUrl}/api/contact/process-contact`,
      data: data,
    });

    await qstash.publishJSON({
      url: `${baseUrl}/api/contact/send-email`,
      data: data,
    });

    return NextResponse.json({status: 'enfileirado'})
    
}
