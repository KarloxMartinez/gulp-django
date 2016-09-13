'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var wiredep = require('wiredep')();

gulp.task('scripts', function () {
    gulp.src(app.name + conf.path.js + '/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(app.name + conf.path.dist)).on('change', browserSync.reload)
        .pipe(notify('scripts task done'));
});

gulp.task('scripts-vendor', function () {
    gulp.src(wiredep.js)
        .pipe(concat('component.js'))
        .pipe(uglify())
        .pipe(gulp.dest(app.name + conf.path.dist)).on('change', browserSync.reload)
        .pipe(notify('scripts-vendor task done'));
});
