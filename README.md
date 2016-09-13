Gulp-django
==============================

Package for manage all gulptasks on django project based on `https://github.com/pydanny/cookiecutter-django`

**Install**

    npm install --save gulpfile-django

**Initial configuration**
TODO: Can override settings.
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

**TODO**

 - Can add custom tasks
 - Compile javascripts vendor libs
 - Add wiredep on sccs files