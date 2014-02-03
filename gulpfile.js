var fs = require('fs');
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');

var jshintrc = JSON.parse(fs.readFileSync('./.jshintrc'));

gulp.task('jshint', function() {
  gulp.src('./src/*.js')
    .pipe(jshint(jshintrc))
    .pipe(jshint.reporter('default'))
});

gulp.task('unit', function () {
  gulp.src('test/unit/*.js')
    .pipe(mocha({reporter: 'spec'}));
});

gulp.task('test', ['jshint', 'unit']);
gulp.task('default', ['test']);
