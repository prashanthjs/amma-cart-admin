const gulp = require('gulp');
const browserSync = require('browser-sync');
const wiredep = require('wiredep').stream;


const conf = require('../conf/gulp.conf');

gulp.task('injectBower', injectBower);

function injectBower() {
  return gulp.src(conf.path.tmp('index.html'))
    .pipe(wiredep(Object.assign({}, conf.wiredep)))
    .pipe(gulp.dest(conf.paths.tmp))
    .pipe(browserSync.stream());
}
