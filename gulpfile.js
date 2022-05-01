var gulp = require('gulp');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');

var csses = [
    'node_modules/materialize-css/dist/css/materialize.min.css',
    'Library/style.css'
];

var jses = [
    'node_modules/materialize-css/dist/js/materialize.min.js',
    'Library/js/app.js'
];  

function styles() {
    return gulp.src(csses)
        .pipe(cleanCSS())
        .pipe(concat('all.css'))
        .pipe(gulp.dest('Library'));
}

function js() {
    return gulp.src(jses)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('Library'));
}

function watch() {
    gulp.watch(jses, js);
    gulp.watch(csses, styles);
}

exports.styles = styles;
exports.js = js;
exports.watch = watch;
exports.default = gulp.parallel(styles, js);