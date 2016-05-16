var elixir = require('laravel-elixir');
require('laravel-elixir-webpack');


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {
    mix.sass('app.scss')
        .webpack('app.js', {
            module: {
                loaders: [
                    { test: /\.js$/, exclude: /node_modules/, loader: "babel", query: {
                        presets: ['es2015']
                    }},
                    {test: /\.scss$/, loader: "style!css!scss"},
                    {test: /\.html$/, loader: "html"}
                ]
            },
            output: {
                publicPath: "/js/"
            }
        })
        .version([
            "/public/css/app.css"
        ]);
});
