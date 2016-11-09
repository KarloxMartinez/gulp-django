'use strict';

var flatten       = require('gulp-flatten');
var gulp          = require('gulp');
var notify        = require('gulp-notify');

gulp.task('fonts', function () {
    gulp.src(conf.path.vendor + '/**/*.{ttf,woff,eof,svg}')
        .pipe(flatten())
        .pipe(gulp.dest(app.name + conf.path.fonts))
        .pipe(notify('fonts task done'));
});
