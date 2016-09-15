Gulp-django
==============================

Package for manage all gulptasks on django project based on `https://github.com/pydanny/cookiecutter-django`

**Install**

    npm install --save gulpfile-django

**Initial configuration**
TODO: 

Can override settings.
```json
{
  "path" : {
    "css": "/static/css",
    "dist": "/static/dist",
    "fonts": "/static/fonts",
    "image": "/static/images",
    "js": "/static/js",
    "sass": "/static/sass",
    "template": "/templates",
    "theme": "/static/theme",
    "vendor": "bower_components"
  },
  "server" : {
    "port" : "3000"
  }
}
```
**Dependencies installed automatically**
browser-sync
gulp
gulp-autoprefixer
gulp-clean-css
gulp-concat
gulp-notify
gulp-sass
gulp-uglify
gulp-watch
require-dir
wiredep

**TASKS**

**Scripts:**

    gulp scripts

concat all files on path.js on one file app.js

    gulp scripts-vendor

concat all files defined on bower.json file and put on file component.js. this used wiredep 4.0 for read all installed packages.

**Styles:**

    gulp sass

Compile all sass on path.sass with the same name scss file, remeber the sass file with prefix _ isnt compiled, if you need vendor components you can add @import "path/to/file.scss" on some file in path.sass.

**Watching**

    gulp watch

This task is watching all js and scss and bower.json files and run specificaly task.

**Development server**

    gulp serve
   
   this task run watch task and run browsersync

**TODO**

 - Can add custom tasks
 - Add wiredep on sccs files
 - To handle errors
 - Add fonts task