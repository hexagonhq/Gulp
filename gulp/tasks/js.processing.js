'use strict';

module.exports = function() {
	$.gulp.task('js:processing', function() {
		return $.gulp.src($.path.app)
			// .pipe($.gp.uglify())
			.pipe($.gulp.dest($.config.root + '/assets/js'));
	})
};