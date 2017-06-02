"use strict";

var gulp = require("gulp");
var open = require("gulp-open");
var connect = require("gulp-connect");
var webserver = require("gulp-webserver");
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");
var concat = require("gulp-concat");
var lint = require("gulp-eslint");

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dst: './dst',
    js: './src/**/*.js',
    mainJs: './src/main.js',
    css: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
        './src/main.css',
        'node_modules/font-awesome/css/font-awesome.min.css',
    ],
    img: './img/*.png'
  }
}

gulp.task('connect', function(){
  connect.server({
    root: ['dst'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function(){
  gulp.src('./dst/index.html')
  .pipe(open({uri: config.devBaseUrl + ':' + config.port + '/', app: 'chrome'}));
});

gulp.task('html', function(){
  gulp.src(config.paths.html)
  .pipe(gulp.dest(config.paths.dst))
  .pipe(connect.reload());
});

gulp.task('js', function(){
  browserify(config.paths.mainJs)
  .transform(reactify)
  .bundle()
  .on('error', console.error.bind(console))
  .pipe(source('bundle.js'))
  .pipe(gulp.dest(config.paths.dst + '/scripts'))
  .pipe(connect.reload());
});

gulp.task('css', function(){
  gulp.src(config.paths.css)
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest(config.paths.dst + '/css'))
  .pipe(connect.reload());
});

gulp.task('img', function(){
  gulp.src(config.paths.img)
  .pipe(gulp.dest(config.paths.dst + '/img'))
  .pipe(connect.reload());
});

gulp.task('lint', function(){
  return gulp.src(config.paths.js)
          .pipe(lint({configFile: 'eslint.json'}))
          .pipe(lint.format());
});

gulp.task('watch', function(){
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
  gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['open', 'html', 'js', 'watch', 'css', 'lint', 'img']);
