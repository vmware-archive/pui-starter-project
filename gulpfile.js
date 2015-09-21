var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var drF = require('dr-frankenstyle');
var loadPlugins = require('gulp-load-plugins');
var sass = require('gulp-sass');

const plugins = loadPlugins();
connect = require('gulp-connect');

gulp.task('build-css', function() {
  return drF()
    .pipe(gulp.dest('build/'));
});

gulp.task('build-js', function() {
 return gulp.src('js/myComponents.js')
   .pipe(webpack({
   module: {
     loaders: [
       {
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader?stage=0&optional[]=runtime&loose=true&nonStandard=true'
       },
       {
        test: /bootstrap/,
        loader: 'imports?jQuery=jquery'
      }
     ],
   },
 }))
 .pipe(rename('myComponents.js'))
 .pipe(gulp.dest('dist/'));
});

gulp.task('setup-watchers', function(callback) {
  process.env.WEBPACK_WATCH = true;
  gulp.watch(['js/**/*.js'], ['build-js']);
  gulp.watch('./css/**/*.scss', ['sass']);
  callback();
});
gulp.task('webserver', ['build-css', 'build-js', 'sass'], function() {
 connect.server();
});

gulp.task('default', ['setup-watchers', 'webserver']);

gulp.task('lint', function() {
  return gulp.src(['js/**/*.js', 'spec/**/*.js'])
    .pipe(plugins.plumber())
    .pipe(plugins.eslint())
    .pipe(plugins.eslint.format('stylish'))
    .pipe(plugins.eslint.failOnError());
});

gulp.task('jasmine', function() {
  var plugin = new (require('gulp-jasmine-browser/webpack/jasmine-plugin'))();
  return gulp.src('spec/**/*_spec.js')
    .pipe(plugins.plumber())
    .pipe(webpack({
      devtool: 'eval',
      watch: true,
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader?stage=0&optional[]=runtime&loose=true'
          }
        ]
      },
      output: {filename: 'spec.js' },
      plugins: [plugin]
    }))
    .pipe(plugins.jasmineBrowser.specRunner())
    .pipe(plugins.jasmineBrowser.server(plugin.whenReady));
});

gulp.task('sass', function () {
  gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
