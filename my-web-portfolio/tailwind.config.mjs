/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            screens: {
                xsm: "425px",
                // => @media (min-width: 425px) { ... }
            },
        },
    },
    plugins: [],
};
