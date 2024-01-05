const { series, parallel, src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));


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
    return src('src/main.scss')
    .pipe(sass())
    .pipe(dest('dist/'));
}

function watcher(){
    watch('src/**/*.scss', compilaSCSS);
}


exports.compilaSCSS = compilaSCSS;
exports.watch = watcher;
exports.build = build;
exports.default = series(clean, build);