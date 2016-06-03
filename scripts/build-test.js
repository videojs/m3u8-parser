import browserify from 'browserify';
import fs from 'fs';
import glob from 'glob';

/* eslint no-console: 0 */

glob('test/**/*.test.js', (err, files) => {
  if (err) {
    throw err;
  }
  browserify(files)
    .transform('babelify')
    .bundle()
    .pipe(fs.createWriteStream('test/dist/bundle.js'));
});
