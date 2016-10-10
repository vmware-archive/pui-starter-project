var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');
var loadPlugins = require('gulp-load-plugins');
var sass = require('gulp-sass');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = loadPlugins();
connect = require('gulp-connect');

gulp.task('build-js', function() {
  return gulp.src('js/myComponents.js')
    .pipe(webpack({
      module: {
        loaders: [
          {
            test: [/\.png(\?|$)/, /\.eot(\?|$)/, /\.ttf(\?|$)/, /\.woff2?(\?|$)/, /\.jpg?(\?|$)/],
            include: /node_modules/,
            loader: 'url?name=[name].[ext]'
          },
          {test: /\.css$/, loader: ExtractTextPlugin.extract('css-loader')},
          {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
          {test: /bootstrap\.js/, loader: 'imports?jQuery=jquery'}
        ]
      },
      plugins: [
        new ExtractTextPlugin('components.css', {
          allChunks: true
        })
      ],
      output: {
        filename: 'myComponents.js'
      }
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('setup-watchers', function(callback) {
  process.env.WEBPACK_WATCH = true;
  gulp.watch(['js/**/*.js'], ['build-js']);
  gulp.watch('./css/**/*.scss', ['build-sass']);
  callback();
});
gulp.task('webserver', ['build-js', 'build-sass'], function() {
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
            loader: 'babel-loader'
          }
        ]
      },
      output: {filename: 'spec.js'},
      plugins: [plugin]
    }))
    .pipe(plugins.jasmineBrowser.specRunner())
    .pipe(plugins.jasmineBrowser.server(plugin.whenReady));
});

gulp.task('build-sass', function() {
  gulp.src('./css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
