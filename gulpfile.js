var gulp = require('gulp');
var copy = require('gulp-copy');

var emailId = '450';

gulp.task('copy', function() {
  return gulp.src('./template/**/*.*')
    .pipe(copy(emailId));
});

gulp.task('default', ['copy']);
