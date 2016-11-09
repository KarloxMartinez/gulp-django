'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    gulp.src(app.name + conf.path.sass + '/**/*.{sass,scss}')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(sourcemaps.write('./maps/'))
        .pipe(gulp.dest(app.name + conf.path.css))
        .pipe(browserSync.stream())
        .pipe(notify('sass task done'));
});
