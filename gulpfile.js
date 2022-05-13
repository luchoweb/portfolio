'use strict'

const gulp = require("gulp")
const sass = require("gulp-sass")(require('node-sass'));
const cleanCss = require("gulp-clean-css")
const sourcemaps = require('gulp-sourcemaps')
const { parallel } = require('gulp')

function css() {
  return gulp.src('./scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(cleanCss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
}

function watchCss(){
  gulp.watch('./scss/*', parallel('css'))
}

exports.css = css
exports.watch = watchCss