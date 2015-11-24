'use strict';
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = './src/sass/**/*.scss',
    uncompiledGlob = './src/**/*.!(js|scss)';

gulp.task('sass-compile', function() {
    gulp.src(sassGlob)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/sass'));
});

gulp.task('uncompiled-copy', function() {
    gulp.src(uncompiledGlob)
        .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function() {
    gulp.watch(sassGlob, ['sass']);
});


gulp.task('uncompiled:watch', function() {
    gulp.watch(uncompiledGlob, ['uncompiled']);
});

gulp.task('sass', ['sass-compile', 'sass:watch']);
gulp.task('uncompiled', ['uncompiled-copy', 'uncompiled:watch']);
gulp.task('run-all', ['sass', 'uncompiled']);