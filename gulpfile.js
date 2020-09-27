const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
// const minify = require('gulp-minify');
// const uglify = require('gulp-replace');
// const replace = require('gulp-clean-css');

gulp.task('css', async function () {
    gulp.src(['style.css'])
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css'))
});