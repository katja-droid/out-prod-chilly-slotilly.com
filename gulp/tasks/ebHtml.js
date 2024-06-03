import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import { path } from '../config/path.js';

export function ebHtml() {
  return gulp.src(path.src.eb)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.build.eb));
}
