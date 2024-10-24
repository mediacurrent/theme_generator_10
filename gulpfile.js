// gulpfile.js

import gulp from 'gulp';
import eslint from 'gulp-eslint-new';
import excludeGitignore from 'gulp-exclude-gitignore';
import { exec } from 'child_process';

// Define the 'lint' task
export function lint() {
  return gulp.src(['**/*.js', '!node_modules/**'])
    .pipe(excludeGitignore())
    .pipe(eslint({configType:'flat'}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Define the 'test' task using nyc for code coverage
export function test(cb) {
  exec('nyc mocha', (err, stdout, stderr) => {
    console.log(stdout);
    console.error(stderr);
    cb(err);
  });
}

// Define the 'watch' task
export function watchFiles() {
  gulp.watch(['generators/**/*.js', 'test/**'], test);
}

// Define the default task
export default gulp.series(
  lint,
  test
);
