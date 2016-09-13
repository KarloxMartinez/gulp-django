'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');

gulp.task('scripts', function () {
    gulp.src(app.name + conf.path.js + '/**/*.js')
        .pipe(concat('scripts.js'))
        .pipe(uglify())
        .pipe(gulp.dest(app.name + conf.path.dist))
        .pipe(browserSync.stream())
        .pipe(notify('scripts task done'));
});