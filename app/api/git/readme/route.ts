import { NextResponse } from 'next/server';

import { GetReadme } from '@/lib/github/FetchData';


export async function GET() {
  const data: string = await GetReadme();

  return NextResponse.json(data);
}