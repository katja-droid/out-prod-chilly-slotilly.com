import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import { path } from '../config/path.js';

export function pbHtml() {
  return gulp.src(path.src.pb)
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(path.build.pb));
}
