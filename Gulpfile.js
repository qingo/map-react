var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    babelify = require('babelify');

gulp.task('js', function () {
    return browserify('./js/src.js', {es6: true, es6module: true, debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('dist.js'))
        .pipe(gulp.dest('./js/'))
});
gulp.task('default', ['js']);