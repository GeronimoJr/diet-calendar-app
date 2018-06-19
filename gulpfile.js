var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass({includePaths: ['./src/sass/**/*.scss']}).on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions']
    }))
    .pipe(gulp.dest('./src/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
