"use strict";
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
gulp.task('browserify', function () {
    var bundler = browserify({
        entries: ['./application/main.js']
    });
    var watcher = watchify(bundler);
    process.env.BROWSER = true;
    return watcher
        .on('update', function () {
            console.log('Updating main.js !');
            process.env.BROWSER = true;
            watcher.bundle()
                .pipe(source('main.js'))
                .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
                .pipe(uglify())
                .pipe(gulp.dest('./public/javascripts/'))
        })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer()) // <----- convert from streaming to buffered vinyl file object
        .pipe(uglify())
        .pipe(gulp.dest('./public/javascripts/'))
        
});

gulp.task('default', ['browserify'])