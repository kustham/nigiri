/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/tw-elements/dist/js/**/*.js',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class',
    plugins: [require('tw-elements/dist/plugin.cjs')],
}
