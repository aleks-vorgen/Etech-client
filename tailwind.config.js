/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            'blue': '#1E5DDB',
            'lightBlue': '#edf4ff',
            'clicked-blue': '#0945bd',
            'lightRed': '#ffeded',
            'orange': '#DB4F35',
            'clicked-orange': '#bf3a22',
            'black': '#323232',
            'white': '#FFFFFF'
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
    },
    plugins: [],
}

