var gulp = require('gulp'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    babelify = require('babelify');

gulp.task('js', function () {
    return browserify('./src/map.js', {es6: true, es6module: true, debug: true})
        .transform(babelify)
        .bundle()
        .pipe(source('map.js'))
        .pipe(gulp.dest('./dist/'))
});
gulp.task('default', ['js']);