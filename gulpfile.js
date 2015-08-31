var gulp = require('gulp');
var rename = require("gulp-rename");
var webpack = require('webpack-stream');
var drF = require('dr-frankenstyle');
connect = require('gulp-connect');

gulp.task('build-css', function() {
  return drF()
    .pipe(gulp.dest('build/'));
});

gulp.task('build-js', function() {
 return gulp.src('myComponents.js')
   .pipe(webpack({
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

gulp.task('setup-watchers', function(callback) {
  process.env.WEBPACK_WATCH = true;
  gulp.watch(['myComponents.js'], ['build-js']);
  callback();
});
gulp.task('webserver', ['build-css', 'build-js'], function() {
 connect.server();
});

gulp.task('default', ['setup-watchers', 'webserver']);
