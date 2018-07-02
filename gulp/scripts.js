var gulp = require('gulp');
var babel = require('gulp-babel');



gulp.task('scripts', () =>
    gulp.src('./app/assets/scripts/**/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .on('error', function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/scripts'))
);
