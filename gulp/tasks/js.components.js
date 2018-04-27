'use strict';

module.exports = function() {
  $.gulp.task('js:components', function() {
    return $.gulp.src($.path.jsPaths)
      .pipe($.gp.concat('app.js'))
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })
};
