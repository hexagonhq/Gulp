'use strict';

global.$ = {
	package: require('./package.json'),
	config: require('./gulp/config.js'),
	path: {
		task: require('./gulp/paths/tasks.js'),
		cssPaths: require('./gulp/paths/css.resource.js'),
		jsPaths: require('./gulp/paths/js.resource.js'),
		app: require('./gulp/paths/app.js')
	},
	gulp: require('gulp'),
	rimraf: require('rimraf'),
	browserify: require('browserify'),
	watchify: require('watchify'),
	babelify: require('babelify'),
	babel: require('babel-core'),
	exorcist: require('exorcist'),
	source: require('vinyl-source-stream'),
	buffer: require('vinyl-buffer'),
	uglify: require('uglify-js'),
	browserSync: require('browser-sync').create(),
	isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development',
	gp: require('gulp-load-plugins')({
		rename: {
			'gulp-sass-glob': 'glob',
			'gulp-svg-sprite': 'svgSprite',
			'gulp-css-unit': 'cssUnit',
			'gulp-concat-css': 'cssconcat',
			'gulp-util': 'gutil',
			'gulp-if': 'gif',
			'gulp-uglify': 'uglify'
		}
	})
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
	'clean',
	$.gulp.parallel(
		'sass',
		'pug',
		'css:components',
		'js:components',
		'copy:image',
		'copy:font',
		'sprite:svg'
	),
	$.gulp.parallel(
		'watch',
		'server',
		'browserify'
	)
));