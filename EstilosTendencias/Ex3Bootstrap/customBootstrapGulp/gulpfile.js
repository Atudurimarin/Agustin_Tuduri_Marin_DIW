const { series, src, dest, parallel, } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concatCss = require('gulp-concat-css');

function clean(cb) {
  // body omitted
  cb();
}

function build(cb) {
  // body omitted
  cb();
}

function compilaSCSS(){
    return src('src/bootstrap/scss/**/*.scss')
    .pipe(sass())
    .pipe(dest('src/css/'));
}

function concatCSS(){
  return src('dist/css/*.css')
  .pipe(concatCss('css/all.css'))
  .pipe(dest('dist/'))
}

function limpiaCSS(){
    return src('src/css/*.css')
    .pipe(cleanCSS())
    .pipe(dest('dist/css/'));
  }



  function uglifyJS(){
    return src('src/*.js')
    .pipe(uglify())
    .pipe(dest('dist/js/'));

  }

  function moveAssets(){
    return src('src/assets/*')
    .pipe(dest('dist/assets'));

  }

  function moveHtml(){
    return src('src/index.html')
    .pipe(dest('dist/'));
  }




exports.compilaSCSS = compilaSCSS;
exports.limpiaCSS = limpiaCSS;
exports.uglify = uglifyJS;
exports.concass = concatCSS;
exports.compila = series(compilaSCSS, limpiaCSS, uglifyJS, moveAssets, moveHtml );

exports.build = build;

exports.default = series(clean, build);