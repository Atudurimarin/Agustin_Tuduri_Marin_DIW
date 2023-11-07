const { series, src, dest, parallel, watch } = require('gulp');
const limpiarCSS = require('gulp-clean-css'); //creamos constante que invoca plugin
const limpiarJS = require ('gulp-uglify');
const scss = require ('gulp-sass')(require('sass'));

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

function minimizaCss(){
  return src('src/css/*.css')  // creamos función con nuevo plugin
  .pipe(limpiarCSS())
  .pipe(dest('dist/'));
}

function minimizaJS(){
  return src('src/javascript/*.js') //origen de los archivos que tiene que optimizar -->path
  .pipe(limpiarJS())   // .pipe()concatenar --> constante de arriba que llama al plugin que optimiza 
  .pipe(dest('dist/')); // concatenar --> carpeta de destino -->path
}


function compilaSCSS(){
  return src('src/scss/*.scss')
  .pipe(scss())
  .pipe(dest('src/css/all.css'));
}

function watcher(){
  watch('src/scss/*.scss', compilaSCSS);
}


exports.scss= compilaSCSS;
exports.build = build;
exports.minifyCss = minimizaCss; // publica funciones
exports.limpiaJS = minimizaJS;
exports.watcher = watcher;
exports.minify = parallel(minimizaCss, minimizaJS);

                                  
exports.default = series(clean, build);