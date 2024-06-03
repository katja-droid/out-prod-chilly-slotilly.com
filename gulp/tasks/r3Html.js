import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import { path } from '../config/path.js';

export function r3Html() {
  return gulp.src(path.src.r3)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.build.r3));
}
