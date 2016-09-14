'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync')
var spawn       = require('child_process').spawn;

gulp.task('run-server', [], () => {
  var runserver = spawn(
      process.env['VIRTUAL_ENV'] + '/bin/python',
      ['manage.py', 'runserver'],
      { stdio: 'inherit' }
  );
  runserver.on('close', function(code) {
      if (code !== 0) {
          console.error('Django runserver exited with error code: ' + code);
      } else {
          console.log('Django runserver exited normally.');
      }
  })
});

gulp.task('browser-sync', [], () => {
  browserSync.init({
    proxy: '127.0.0.1:8000'
  });
});

gulp.task('serve', ['run-server', 'watch', 'browser-sync']);
