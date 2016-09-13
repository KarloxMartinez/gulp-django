'use strict';

var gulp  = require('gulp');
var browserSync = require('browser-sync');
var wiredep = require('wiredep')();

gulp.task('watch', [], function () {
    gulp.watch(app.name + conf.path.js + '/**/*.js', ['scripts']);
    gulp.watch('bower.json', ['scripts-vendor']);
    gulp.watch(app.name + conf.path.sass + '/**/*.{sass,scss}', ['sass']);
    gulp.watch([
      app.name + conf.path.template + '/**/*.html',
      app.name + conf.path.image + '/**/*.{svg,jpg,png,jpeg,gif}']).on('change', browserSync.reload);
});
