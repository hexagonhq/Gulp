'use strict';

module.exports = function() {
	function bundle(bundler) {
		return bundler
		.transform($.babelify.configure({
			presets: ["es2015"]
		}))
		.bundle()
		.on('error', function(e) {
			$.gp.gutil.log(e);
		})
		.pipe($.gp.gif($.isDevelopment, $.exorcist($.config.root + '/assets/js/app.js.map')))
		.pipe($.source('bundle.js'))
		.pipe($.buffer())
		.pipe($.gp.uglify())
		.pipe($.gulp.dest($.config.root + '/assets/js'));
	}

	$.gulp.task('browserify', function() {
		$.watchify.args.debug = true;
		var watcher = $.watchify($.browserify('./source/js/app.js', $.watchify.args))
		bundle(watcher);
		watcher.on('update', function() {
			bundle(watcher);
		});
		watcher.on('log', $.gp.gutil.log);
	});
};