import { NextResponse } from 'next/server';

import { lib } from '@jorgechato/manyo';


export async function GET() {
  const data: lib.ProfileStatus = await lib.GetStatus();

  return NextResponse.json(data);
}