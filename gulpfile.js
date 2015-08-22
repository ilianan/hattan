var gulp = require('gulp'),
    plugins = require('gulp-load-plugins')({ pattern: '*' });

/**
 * Definitions for source and destination paths.
 */
var FILES = {
  SRC: {
    JS: 'src/js/**/*.js',
    SCSS: 'src/scss/**/*.scss',
    JADE: 'src/**/*.jade',
    FONTS: 'src/fonts/**/*'
  },
  DEST: {
    JS: 'build/js/',
    CSS: 'build/css/',
    HTML: 'build/',
    FONTS: 'build/fonts/'
  }
};

/**
 * Initialize the server.
 */
gulp.task('serve', function () {
  plugins.browserSync({
    server: { baseDir: 'build' },
    files: [
      FILES.DEST.JS,
      FILES.DEST.CSS,
      FILES.DEST.HTML,
      FILES.DEST.FONTS
    ]
  });

  gulp.watch(FILES.SRC.JS, ['js']);
  gulp.watch(FILES.SRC.SCSS, ['scss']);
  gulp.watch(FILES.SRC.JADE, ['jade']);
  gulp.watch(FILES.SRC.FONTS, ['fonts']);
});

/**
 * Compile Jade files.
 */
gulp.task('jade', function () {
  gulp
    .src(FILES.SRC.JADE)
    .pipe(plugins.jade({ pretty: true }))
    .pipe(gulp.dest(FILES.DEST.HTML));
});

/**
 * Compile ECMAScript 6 files.
 */
gulp.task('js', function () {
  gulp
    .src(FILES.SRC.JS)
    // .pipe(plugins.es6Transpiler())
    .pipe(gulp.dest(FILES.DEST.JS));
});

/**
 * Compile SCSS files.
 */
gulp.task('scss', function () {
  gulp
    .src(FILES.SRC.SCSS)
    .pipe(plugins.sass())
    .pipe(gulp.dest(FILES.DEST.CSS));
});

/**
 * Copy font files.
 */
gulp.task('fonts', function () {
  gulp
    .src(FILES.SRC.FONTS)
    .pipe(gulp.dest(FILES.DEST.FONTS));
});
