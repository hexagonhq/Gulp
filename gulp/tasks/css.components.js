'use strict';

module.exports = function() {
  $.gulp.task('css:components', function() {
    return $.gulp.src($.path.cssPaths)
      .pipe($.gp.cssconcat('normalize.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'))
  })
};