'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = './src/sass/**/*.scss',
    uncompiledGlob = './src/**/*.!(js|scss)';

gulp.task('sass', function() {
    gulp.src(sassGlob)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/sass'));
});

gulp.task('uncompiled', function() {
    gulp.src(uncompiledGlob)
        .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function() {
    gulp.watch(sassGlob, ['sass']);
});


gulp.task('uncompiled:watch', function() {
    gulp.watch(uncompiledGlob, ['uncompiled']);
});

gulp.task('run-all', ['sass', 'uncompiled']);
gulp.task('watch-all', ['sass:watch', 'uncompiled:watch']);