let mix = require("laravel-mix");

require("laravel-mix-react-typescript-extension");

mix
  .js('resources/js/app.js', 'public/js')
  .reactTypeScript("resources/ts/app.ts", "public/ts")
  .sass("resources/sass/app.scss", "public/css");
