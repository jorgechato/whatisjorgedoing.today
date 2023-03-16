import localFont from 'next/font/local';


export const H1Font = localFont({
    src: [
        {
            path: './fonts/futura-medium.ttf',
            style: 'normal',
            weight: '500',
        },
        {
            path: './fonts/futura-bold.ttf',
            style: 'blod',
            weight: '700',
        },
    ],
});

export const TitleFont = localFont({
    src: [
        {
            path: './fonts/futura-medium-new.ttf',
            style: 'normal',
            weight: '500',
        },
        {
            path: './fonts/futura-bold-new.ttf',
            style: 'blod',
            weight: '700',
        },
    ],
});
