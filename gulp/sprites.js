var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {
  shape: {
        dimension: {
          maxWidth: 40,
          maxHeight: 40
        },
        spacing: {
          padding: 1
        }
      },

  mode: {
    css: {
      sprite: 'sprite.svg',
      render: {
        css:{
          template: './gulp/templates/spriteTemplate.css'
        }
      }
    }
  }
}


gulp.task('startClean', function(){
  return del(['./app/assets/styles/modules/_sprite.css', './app/temp/sprite'])
})
gulp.task('createSprite',['startClean'], function(){
  return gulp.src('./app/assets/images/icons/**/*.svg')
    .pipe(svgSprite(config))
    .pipe(gulp.dest('./app/temp/sprite'));
});

gulp.task('moveSpriteCSS',['createSprite'], function(){
  return gulp.src('./app/temp/sprite/css/*.css')
  .pipe(rename('_sprite.css'))
  .pipe(gulp.dest('./app/assets/styles/modules/'))
})
gulp.task('sprites',['startClean','createSprite', 'moveSpriteCSS']);
