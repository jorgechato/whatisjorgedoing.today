import { NextResponse } from 'next/server';

import { lib } from '@jorgechato/manyo';


export async function GET() {
  const data: lib.PinnedRepos[] = await lib.GetPinnedRepos();

  return NextResponse.json(data);
}