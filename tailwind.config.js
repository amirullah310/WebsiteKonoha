import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            colors: {
                konoha: {
                    orange: '#ff7b00',
                    red: '#c41e3a',
                    dark: '#121212',
                    light: '#1a1a1a',
                    muted: '#a0a0a0',
                    scroll: '#e0e0e0',
                },
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
                accent: ['Shippori Mincho', 'serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
        },
    },

    plugins: [forms],
};
