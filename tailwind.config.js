const tailwindConfig = require('@jorgechato/manyo/tailwind.config.js');


// tailwindConfig.theme.extend.colors.accent = colors.blue[600];
tailwindConfig.content = [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
];

/** @type {import('tailwindcss').Config} */
module.exports = tailwindConfig;
