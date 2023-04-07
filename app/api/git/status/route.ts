import { NextResponse } from 'next/server';

import { GetStatus } from '@/lib/github/FetchData';


export async function GET() {
  const data: string = await GetStatus();

  return NextResponse.json(data);
}