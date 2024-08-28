/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Colors used in Project
            colors: {
                primary: '#c90f50',
            },

            // Fonts used in Project
            fontFamily: {
                primary: "Poppins",
                secondary: "Montserrat"
            }
        },
    },
    darkMode: 'class',
    plugins: [],
}