var path = require('path');
var gulp = require('gulp');
var template = require('gulp-template');
var fileinclude = require('gulp-file-include');
var rename = require("gulp-rename");
var argv = require('minimist')(process.argv.slice(1));

var emailId = argv.id || '445';
var emailQuote = argv.quote || 'Boas compras!';
var emailObj = {quote: emailQuote, emailId: emailId};

gulp.task('copy', function() {
   gulp.src('../template/**.*')
    .pipe(gulp.dest('../' + emailId));
});

gulp.task('build', function() {
  return gulp.src('../template/template.html')
    .pipe(template(emailObj))
    .pipe(fileinclude({
      prefix: '@@',
      basepath: path.join(__dirname, '../', emailId)
    }))
    .pipe(template(emailObj))
    .pipe(rename(function (path) {
      path.basename += "-build";
    }))
    .pipe(gulp.dest('../' + emailId));
});

gulp.task('default', ['copy', 'build']);
