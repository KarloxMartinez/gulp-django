'use strict';

var gulp  = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch', ['scripts-vendor', 'scripts', 'fonts'], function () {
	console.log("image files load from: " + conf.name + conf.path.image + '/**/*.{svg,jpg,png,jpeg,gif}'),
	console.log("js files load from: " + conf.name + conf.path.js  + '/**/*.js'),
	console.log("sass files load from: " + conf.name + conf.path.sass + '/**/*.{sass,scss}'),
	console.log("template files load from: " + conf.name + conf.path.template + '/**/*.html'),
    gulp.watch(conf.name + conf.path.js + '/**/*.js', ['scripts']).on('change', browserSync.reload);
    gulp.watch('bower.json', ['scripts-vendor']).on('change', browserSync.reload);
    gulp.watch(conf.name + conf.path.sass + '/**/*.{sass,scss}', ['sass']);
    gulp.watch(conf.name + conf.path.vendor + '/**/*.{ttf,woff,eof,svg}', ['fonts']).on('change', browserSync.reload);
    gulp.watch([
      conf.name + conf.path.template + '/**/*.html',
      conf.name + conf.path.image + '/**/*.{svg,jpg,png,jpeg,gif}']).on('change', browserSync.reload);
});
