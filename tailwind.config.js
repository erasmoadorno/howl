// const defaultTheme = require('tailwindcss/defaultTheme');
 const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                howl_color:{
                    800: '#000308',
                    700: '#00070f',
                    600: '#000f1e',
                    500: '#001e32',
                    400: '#003c64',
                    300: '#005a96',
                    200: '#0078c8',
                    100: '#0096fa',
                    
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
};
