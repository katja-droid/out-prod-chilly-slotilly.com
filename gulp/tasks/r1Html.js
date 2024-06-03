import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import { path } from '../config/path.js';

export function r1Html() {
  return gulp.src(path.src.r1)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.build.r1));
}
