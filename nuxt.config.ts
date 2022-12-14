export default defineNuxtConfig({
    css: ["@/assets/css/main.css"],
    buildModules: [
        '@nuxt/postcss8',
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    }
})
