var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts', () =>
    gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/@gabriel-delepine/smooth-scroll/smooth-scroll.js','./app/assets/scripts/**/*.js'])
        .pipe(babel({
            presets: ['env']
        }))
        .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(uglify())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./app/temp/scripts'))
);
