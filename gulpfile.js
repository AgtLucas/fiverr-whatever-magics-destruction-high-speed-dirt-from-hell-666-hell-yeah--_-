var gulp = require('gulp');
var template = require('gulp-template');
var fileinclude = require('gulp-file-include');
var argv = require('minimist')(process.argv.slice(1));

var emailId = argv.id || '450';
var emailQuote = argv.quote || 'Boas compras!';

gulp.task('copy', function() {
  gulp.src('./template/**.*')
    .pipe(gulp.dest('./' + emailId));
});

gulp.task('build', function() {
  gulp.src('./template/index.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: __dirname + '/template'
    }))
    .pipe(template({quote: emailQuote, emailId: emailId}))
    .pipe(gulp.dest('./' + emailId + '/build'));
});

gulp.task('default', ['copy', 'build']);
