var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function () {
  gulp
    .src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css/'));
});

gulp.task('default', ['less']);
gulp.task('watch', ['less'], function () {
  gulp.watch('less/*.less', ['less']);
});
