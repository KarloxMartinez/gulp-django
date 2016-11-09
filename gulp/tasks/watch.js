'use strict';

var gulp  = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['scripts-vendor', 'scripts', 'fonts'], function () {
    gulp.watch(app.name + conf.path.js + '/**/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch('bower.json', ['scripts-vendor']).on('change', browserSync.reload);
    gulp.watch(app.name + conf.path.sass + '/**/*.{sass,scss}', ['sass']);
    gulp.watch(app.name + conf.path.vendor + '/**/*.{ttf,woff,eof,svg}', ['fonts']).on('change', browserSync.reload);
    gulp.watch([
      app.name + conf.path.template + '/**/*.html',
      app.name + conf.path.image + '/**/*.{svg,jpg,png,jpeg,gif}']).on('change', browserSync.reload);
});
