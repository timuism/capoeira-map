const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.jsx', 'public/js/app.js')
    .webpackConfig({
        module: {
        rules: [
            {
            test: /\.tsx?$/,
            loader: "ts-loader",
            exclude: /node_modules/
            }
        ]
        },
        resolve: {
        extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
        }
    })
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss')
    ])
