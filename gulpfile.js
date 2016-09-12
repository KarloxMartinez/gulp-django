'use strict'

var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var _ = require('gulp-load-plugins')({lazy: false})
var cleanCSS = require('gulp-clean-css');
var exec = require('child_process').exec

var path = {
  sass: 'idk/static/sass',
  js: 'idk/static/js',
  dist: 'idk/static/dist',
  css: 'idk/static/css',
  image: 'idk/static/images',
  vendor: 'bower_components',
  theme: 'idk/static/theme',
  template: 'idk/templates'
}

gulp.task('server', ['browser-sync'], function() {
  exec('python manage.py runserver 0.0.0.0:8000', function(err, out, code) {
    if (err instanceof Error)
    throw err
    process.stderr.write(err)
    process.stdout.write(out)
    process.exit(code)
  })
})

gulp.task('browser-sync', ['watch'], function() {
  browserSync.init({
    proxy: '127.0.0.1:8000'
  })
})

gulp.task('sass', function() {
  gulp.src(`${path.sass}/*.scss`)
    .pipe(_.sourcemaps.init())
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.sass({outputStyle: 'compressed'}))
    .pipe(_.sourcemaps.write("./"))
    .pipe(gulp.dest(path.css))
    .pipe(_.notify('Finish task'))
    .pipe(browserSync.stream())
})


gulp.task('js', ['js:dev'], browserSync.reload)

gulp.task('js:dev', ['lint', 'uglify'], function() {
  gulp.src(`${path.js}${'/*.js'}`)
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.concat('main.js'))
    .pipe(gulp.dest(path.dist))
    .pipe(_.notify('Finish task'))
})

gulp.task('uglify', function() {
  gulp.src(path.dist + '/main.js')
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.rename({ extname: '.min.js'}))
    .pipe(_.uglify())
    .pipe(gulp.dest(path.dist))
})

gulp.task('lint', function() {
 gulp.src(path.js + '/*.js')
  .pipe(_.jshint())
  .pipe(_.jshint.reporter('default'))
})

gulp.task('vendor', ['build-css', 'build-js'], browserSync.reload)

gulp.task('build-css', function () {
  gulp.src([
    `${path.vendor}/jquery.gritter/css/jquery.gritter.css`])
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.concat('notifications.css'))
    .pipe(gulp.dest(path.css))
  gulp.src([`${path.vendor}/bootstrap/dist/css/bootstrap.css`,
    `${path.vendor}/jquery-ui/themes/base/all.css`,
    `${path.vendor}/font-awesome/css/font-awesome.css`,
    `${path.vendor}/jquery.gritter/css/jquery.gritter.css`,
    `${path.vendor}/angular-chart.js/dist/angular-chart.css`,
    `${path.theme}/ctheme/css/style.css`,
    `${path.theme}/ctheme/css/animate.css`,
    `${path.theme}/ctheme/css/style-responsive.css`,
    `${path.theme}/ctheme/css/theme/default.css`])
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.concat('admin.css'))
    .pipe(gulp.dest(path.css))
  gulp.src([`${path.vendor}/bootstrap/dist/css/bootstrap.css`,
    `${path.vendor}/jquery-ui/themes/base/all.css`,
    `${path.vendor}/font-awesome/css/font-awesome.css`,
    `${path.vendor}/jquery.gritter/css/jquery.gritter.css`,
    `${path.theme}/frontend/css/style.css`,
    `${path.theme}/frontend/css/animate.css`,
    `${path.theme}/frontend/css/style-responsive.css`,
    `${path.theme}/frontend/css/theme/default.css`])
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.concat('land.css'))
    .pipe(gulp.dest(path.css))
    .pipe(_.notify('Finish task'))
})

gulp.task('build-js', function() {
  gulp.src([`${path.vendor}/jquery/dist/jquery.js`,
    `${path.vendor}/jquery-ui/jquery-ui.js`,
    `${path.vendor}/jquery.gritter/js/jquery.gritter.js`,
    `${path.vendor}/angular/angular.js`,
    `${path.vendor}/angular-resource/angular-resource.js`,
    `${path.vendor}/angular-sanitize/angular-sanitize.js`,
    `${path.vendor}/angular-elastic/elastic.js`,
    `${path.vendor}/humanize/humanize.js`,
    `${path.vendor}/angularjs-humanize/src/angular-humanize.js`,
    `${path.vendor}/moment/moment.js`,
    `${path.vendor}/angular-moment/angular-moment.js`,
    `${path.vendor}/angular-nl2br/angular-nl2br.js`,
    `${path.vendor}/bootstrap/dist/js/bootstrap.js`,
    `${path.vendor}/bootbox.js/bootbox.js`,
    `${path.vendor}/ngBootbox/dist/ngBootbox.js`,
    `${path.vendor}/pluralize/pluralize.js`,
    `${path.vendor}/spin.js/spin.js`,
    `${path.vendor}/angular-spinner/angular-spinner.js`,
    `${path.vendor}/angular-loading-spinner/angular-loading-spinner.js`,
    `${path.vendor}/Chart.js/Chart.js`,
    `${path.vendor}/angular-chart.js/dist/angular-chart.js`,
    `${path.vendor}/oclazyload/dist/ocLazyLoad.js`,
    `${path.vendor}/PACE/pace.js`,
    `${path.vendor}/scrollMonitor/scrollMonitor.js`,
    `${path.vendor}/slimScroll/jquery.slimscroll.js`,
    `${path.theme}/ctheme/js/apps.js`,
    `${path.theme}/ctheme/js/dashboard-v2.js`])
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.concat('component.js'))
    .pipe(gulp.dest(path.dist))
    .pipe(_.rename({ extname: '.min.js'}))
    .pipe(_.uglify())
    .pipe(gulp.dest(path.dist))
  gulp.src([`${path.vendor}/jquery/dist/jquery.js`,
    `${path.vendor}/bootstrap/dist/js/bootstrap.js`,
    `${path.vendor}/jquery-ui/jquery-ui.js`,
    `${path.vendor}/PACE/pace.js`,
    `${path.vendor}/scrollMonitor/scrollMonitor.js`,
    `${path.vendor}/jquery.gritter/js/jquery.gritter.js`,
    `${path.theme}/frontend/js/apps.js`])
    .pipe(_.plumber({errorHandler: HandlersError}))
    .pipe(_.concat('vendor.js'))
    .pipe(gulp.dest(path.dist))
    .pipe(_.rename({ extname: '.min.js'}))
    .pipe(_.uglify())
    .pipe(gulp.dest(path.dist))
    .pipe(_.notify('Finish task'))
})

gulp.task('watch', function() {
  gulp.watch(path.js + '/**/*.js', ['js'])
  gulp.watch(path.sass + '/**/*.scss', ['sass'])
  gulp.watch(path.template + '/**/*.html').on('change', browserSync.reload)
})

function HandlersError (e) {
  _.notify.onError({title: 'Task error', message: "Check your terminal", sound: "Sosumi"})(e)
  console.log(e.message)
  this.emit('end')
}
