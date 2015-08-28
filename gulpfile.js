var gulp = require('gulp');
var rename = require("gulp-rename");
var webpack = require('gulp-webpack');

gulp.task('default', function() {
  return gulp.src('myComponents.js')
    .pipe(webpack({
    watch: true,
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader?stage=0&optional[]=runtime&loose=true&nonStandard=true'
        }
      ],
    },
  }))
  .pipe(rename('myComponents.js'))
  .pipe(gulp.dest('dist/'));
});
