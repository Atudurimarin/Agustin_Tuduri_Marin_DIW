const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minimitzaCSS = require('gulp-clean-css');
const minimitzaJS = require ('gulp-uglify');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

function compilaSCSS(){
    return src('src/sass/*.scss')
    .pipe(sass())
    .pipe(dest('src/css/'));
}

function watcher(){
    watch('src/sass/partials/*.scss', compilaSCSS);
  }

  function limpiaCSS(){
    return src('src/css/*.css')
    .pipe(minimitzaCSS())
    .pipe(dest('dist/css/'));
  }

  function limpiaJS(){
    return src('src/js/*.js')
    .pipe(minimitzaJS())
    .pipe(dest('dist/js/'));

  }

  function concatCSS(){
    return src('dist/css/*.css')
    .pipe(concatCss('css/all.css'))
    .pipe(dest('dist/'))
  }

  function concatjs(){
    return src('dist/js/*.js')
    .pipe(concat('all.js'))
    .pipe(dest('dist/'))

  }


  function minimitzaCssDist(){
    return src('dist/css/all.css') // He puesto esta función para volver a limpiar el CSS que se volvía a des-minimizar después de concatenar
    .pipe(minimitzaCSS())         // He dejado la tarea limpiaCSS original porque es la que me sube los archivos css a dist
    .pipe(dest('dist/css/'))
  }





exports.build = build;
exports.sass = compilaSCSS;
exports.sass_watch = watcher;
exports.minimitzacss = series( compilaSCSS, limpiaCSS);
exports.minimitzajs = limpiaJS;
exports.concatcss = series (compilaSCSS, limpiaCSS, concatCSS, minimitzaCssDist);
exports.concatjs = series (limpiaJS, concatjs);
exports.kittens = series (compilaSCSS, limpiaCSS, concatCSS, minimitzaCssDist, limpiaJS, concatjs );



exports.default = series(clean, build);