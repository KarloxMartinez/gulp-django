/*
 * gulpfile.js
 * ===========
 * 
 */

global.app = require('./package.json');
global.isProd = false;
try{
    global.defaultconf = require('./node_modules/gulpfile-django/gulp.conf.json');
} catch(error){
    console.log("Cannot load default configuration")
    return error;
}
try {
    global.localconf = require('./gulp.conf.json');
    if (global.defaultconf && global.localconf) {
    	global.conf = require('merge').recursive(global.defaultconf, global.localconf);
    }else{
    	global.conf = global.defaultconf
    }
} catch (error) {
    global.conf = global.defaultconf
    console.log("Please dont forget load a local configuration, config.json file in root directory");
}

if (!global.conf.name) {
	global.conf.name = global.app.name;
}

try {
    require('./node_modules/gulpfile-django/gulp');
} catch (error) {
	// Load task in tool development
    require('./gulp');
}
