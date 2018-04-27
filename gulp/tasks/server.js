'use strict';

module.exports = function() {
  $.gulp.task('server', function() {
    $.browserSync.init({
      open: false,
      server: $.config.root,
			notify: false
    });

    $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
  });
};
