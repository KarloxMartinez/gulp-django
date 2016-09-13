'use strict';

var gulp  = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', [], function () {
    gulp.watch(app.name + conf.path.js + '/**/*.js', ['scripts']);
    gulp.watch(app.name + conf.path.sass + '/**/*.{sass,scss}', ['sass']);
    gulp.watch([ 
      app.name + conf.path.template + '/**/*.html', 
      app.name + conf.path.image + '/**/*.{svg,jpg,png,jpeg,gif}']).on('change', browserSync.reload);
});