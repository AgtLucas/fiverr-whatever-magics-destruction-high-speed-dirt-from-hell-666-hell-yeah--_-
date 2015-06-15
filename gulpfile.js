var gulp = require('gulp');
var template = require('gulp-template');

var emailId = '450';
var emailQuote = 'Boas compras!';

gulp.task('copy', function() {
  return gulp.src('./template/**.*')
    .pipe(gulp.dest(emailId));
});

gulp.task('quote', function() {
  return gulp.src('./template/index.html')
    .pipe(template({quote: emailQuote}))
    .pipe(gulp.dest(emailId));
});

gulp.task('default', ['copy', 'quote']);
