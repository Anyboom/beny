export default {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    plugins: [require("tailwindcss-primeui")],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#222222",
                    darken: "#111111",
                },
                gray: {
                    DEFAULT: "#F6F6F6",
                    darken: "#EBEBEB",
                },
            },
        },
    },
};
