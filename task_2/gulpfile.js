const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const concat = require('gulp-concat');

gulp.task('sass-compile', () =>{
    return gulp.src('./scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'));
});

gulp.task('watch', () =>{
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'));
    gulp.watch('./js/**/*.js', gulp.series('scripts'));
});

gulp.task('scripts', function() {
    return gulp.src('./js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/'));
});