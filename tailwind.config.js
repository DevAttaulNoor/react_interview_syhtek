/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // Colors
            colors: {
                primary: '#c90f50',
            },

            // Fonts
            fontFamily: {
                primary: "Poppins",
                secondary: "Montserrat"
            },

            // Box Shadow
            boxShadow: {
                full: '0px 0px 5px 5px rgba(0, 0, 0, 0.15)',
            },

            // Border Radius
            borderRadius: {
                cylindrical: '32px',
            },
        },
    },
    plugins: [],
}