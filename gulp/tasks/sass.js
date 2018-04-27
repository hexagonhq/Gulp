'use strict';

module.exports = function() {
	 $.gulp.task('sass', function() {
		return $.gulp.src('./source/style/app.scss')
			.pipe($.gp.gif($.isDevelopment, $.gp.sourcemaps.init()))
			.pipe($.gp.glob($.config.sassGlobConfig))
			.pipe($.gp.sass({
				outputStyle: 'compressed',
				includePaths: [$.config.breakpointSassConfig, $.config.susyConfig]
			})).on('error', $.gp.notify.onError({ title: 'Style' }))
			.pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
			.pipe($.gp.csso())
			.pipe($.gp.cssUnit({
				type: 'px-to-rem',
				rootSize: 16
			}))
			.pipe($.gp.gif($.isDevelopment, $.gp.sourcemaps.write()))
			.pipe($.gulp.dest($.config.root + '/assets/css'))
			.pipe($.browserSync.stream());
	})
};
