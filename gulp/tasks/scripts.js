'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');
var bowerFiles    = require('bower-files')();
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scripts', function () {
    gulp.src(app.name + conf.path.js + '/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(app.name + conf.path.dist))
        .pipe(notify('scripts task done'));
});

gulp.task('scripts-vendor', function () {
    gulp.src(bowerFiles.ext('js').files)
        .pipe(sourcemaps.init())
        .pipe(concat('component.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(app.name + conf.path.dist))
        .pipe(notify('scripts-vendor task done'));
});

