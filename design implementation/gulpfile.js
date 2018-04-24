'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');
var connect = require('gulp-connect');
var hb = require('gulp-hb');
var path = require('path');

const paths = {
  style_watch: [
    './src/components/**/*.scss',
    './src/design/**/*.scss'
  ],
  style_master: './src/design/app.scss',
  style_dist: './dist/css',
  html_watch: [
    './src/components/**/*.hbs',
    './src/pages/**/*.html'
  ],
  html_pages: './src/pages/**/*.html',
  html_partials: './src/components/**/*.hbs',
  html_dist: './dist',
  static_src: [
    './src/static/images/**/*',
    './src/static/fonts/**/*',
    './src/static/icons/**/*',
  ],
  static_dist: './dist/',
};

gulp.task('html', function () {
  return gulp
    .src(paths.html_pages)
    .pipe(hb({debug: true})
      .partials(paths.html_partials, {
        parsePartialName: function (option, file) {
          return path.basename(file.path, '.hbs');
        }
      })
    )
    .pipe(gulp.dest(paths.html_dist))
    .pipe(connect.reload());
});

gulp.task('style', function () {
  return gulp
    .src(paths.style_master)
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.style_dist))
    .pipe(connect.reload());
});

gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  });
});

gulp.task('watch', function () {
  gulp.watch(paths.style_watch, ['style']);
  gulp.watch(paths.html_watch, ['html']);
});

gulp.task('copy', function () {
  gulp.src(paths.static_src, { "base": "./src/static" })
      .pipe(gulp.dest(paths.static_dist));
});

gulp.task('default', ['html', 'style', 'copy', 'watch', 'connect']);
