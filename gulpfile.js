/*
 * gulpfile.js
 * ===========
 * 
 */

global.isProd = false;
global.app = require('./package.json');
global.conf = require('./node_modules/gulpfile-django/gulpvars.json');
require('./node_modules/gulpfile-django/gulp');
