var gulp = require('gulp'),
  	concatCss = require('gulp-concat-css'),
  	cleanCss = require('gulp-clean-css'),
  	sass = require("gulp-sass"),
  	autoprefixer = require('gulp-autoprefixer');


gulp.task('default', function () {
  return gulp.src('css/*.css')
    .pipe(concatCss('style.css'))
    .pipe(cleanCss())
    .pipe(autoprefixer({ browsers: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6']}))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass', function () {
  return gulp.src('css/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss('style.css')) 
    .pipe(autoprefixer({ browsers: ['last 15 version', 'safari 5', 'ie 6', 'ie 7', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6']}))
    .pipe(gulp.dest('./api/css'))
});

gulp.task('build-css', function () {
  return gulp.src('css/plugin/*.css')
    .pipe(gulp.dest('./api/css'))
});

gulp.task('build-html', function () {
  return gulp.src('./*.html')
    .pipe(gulp.dest('./api'))
});

gulp.task('build-img', function () {
  return gulp.src('./img/*')
    .pipe(gulp.dest('./api/img/'))
});

gulp.task('build-font', function () {
  return gulp.src('./fonts/*')
    .pipe(gulp.dest('./api/fonts/'))
});

gulp.task('build-js', function () {
  return gulp.src('./js/*.js')
    .pipe(gulp.dest('./api/js/'));
});

gulp.task('build', ['build-html', 'build-font', 'build-js', 'build-img','sass', 'build-css']);

gulp.task('watch', function () {
    gulp.watch('css/plugin/*.css',['build-css'])
    gulp.watch('css/*.sass',['sass'])
  	gulp.watch('./*.html',['build-html'])
    gulp.watch('js/*.js',['build-js']);
});