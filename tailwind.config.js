/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {
            transparent: 'transparent',
            'blue': '#1E5DDB',
            'clicked-blue': '#0945bd',
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

