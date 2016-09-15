'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var bowerFiles    = require('bower-files')();
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('scripts', function () {
    gulp.src(app.name + conf.path.js + '/**/*.js')
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest(app.name + conf.path.dist)).on('change', browserSync.reload)
        .pipe(notify('scripts task done'));
});

gulp.task('scripts-vendor', function () {
    gulp.src(bowerFiles.ext('js').files)
        .pipe(concat('component.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(app.name + conf.path.dist)).on('change', browserSync.reload)
        .pipe(notify('scripts-vendor task done'));
});

