import { NextResponse } from 'next/server';

import { Status, StatusType } from '@/lib/status/FetchData';
import packageInfo from '@/package.json';

const config: { [key: string]: any } = require('@/my.config.js');


export async function GET() {
    const status: Status = {
        name: config.TITLE,
        type: StatusType.OK,
        url: 'https://whatisjorgedoing.today',
        version: packageInfo.version,
    };

    return NextResponse.json(status);
}
