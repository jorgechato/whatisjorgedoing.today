import { NextResponse } from 'next/server';

import { GetPinnedRepos, PinnedRepos } from '@/lib/github/FetchData';


export async function GET() {
  const data: PinnedRepos[] = await GetPinnedRepos();

  return NextResponse.json(data);
}