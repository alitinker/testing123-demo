'use strict';

var browserify = require('browserify')
  , del = require('del')
  , source = require('vinyl-source-stream')
  , vinylPaths = require('vinyl-paths')
  , glob = require('glob')
  , Server = require('karma').Server
  , gulp = require('gulp');

// Load all gulp plugins listed in package.json
var gulpPlugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

// Define file path variables
var paths = {
  root: 'app/',      // App root path
  src:  'app/js/',   // Source path
  dist: 'app/dist/', // Distribution path
  test: 'test/',     // Test path
  sassWatch: 'app/assets/css/sass/*.scss', // SASS files we want to watch
  sassCompile: 'app/assets/css/sass/style.scss', // SASS files we want to compile
};

/*
 * Useful tasks:
 * - gulp fast:
 *   - linting
 *   - unit tests
 *   - browserification
 *   - no minification, does not start server.
 * - gulp watch:
 *   - starts server with live reload enabled
 *   - lints, unit tests, browserifies and live-reloads changes in browser
 *   - no minification
 * - gulp:
 *   - linting
 *   - unit tests
 *   - browserification
 *   - minification and browserification of minified sources
 *   - start server for e2e tests
 *   - run Protractor End-to-end tests
 *   - stop server immediately when e2e tests have finished
 *
 * At development time, you should usually just have 'gulp watch' running in the
 * background all the time. Use 'gulp' before releases.
 */

var liveReload = true;

gulp.task('clean', function () {
  return gulp
  .src([paths.dist + 'js'], {read: false})
  .pipe(vinylPaths(del));
});

//SASS compile
gulp.task('styles', function() {
    gulp.src(paths.sassCompile)
        .pipe(gulpPlugins.sass({outputStyle: 'compressed'}).on('error', gulpPlugins.sass.logError))
        .pipe(gulp.dest(paths.dist + 'css'))
});

//Image compression
gulp.task('images', function() {
  return gulp.src(paths.root + 'assets/images/**')
    .pipe(gulpPlugins.cache(gulpPlugins.imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(paths.dist + 'images'));
});

//Icon config
var svgSpriteConfig = {
  mode: {
    symbol: {
      dest: '',
      sprite: 'icons.svg'
    }
  },
  shape: {
    // Titles and descriptions
    meta: paths.root + 'assets/icons/icon-titles/icon-titles.yaml',
    // Add suffix to IDs
    id: {
      generator: '%s-icon'
    }
  }
};

//Create icon sprite
gulp.task('icons', function () {
  return gulp.src(paths.root + 'assets/icons/*.svg')
      .pipe(gulpPlugins.cheerio({
        run: function ($) {
            //remove fill attribute so we can set it in the css
            $('[fill]').removeAttr('fill'); 
        },
        parserOptions: { xmlMode: true }
    }))
    .pipe(gulpPlugins.svgSprite(svgSpriteConfig))
    .pipe(gulp.dest(paths.dist + 'icons'));
});

//JS linting
gulp.task('lint', function () {
  return gulp
  .src(['gulpfile.js',
      paths.src + '**/*.js',
      paths.test + '**/*.js'
  ])
  .pipe(gulpPlugins.eslint())
  .pipe(gulpPlugins.eslint.format());
});



//Browserify 
gulp.task('browserify', /*['lint', 'unit'],*/ function () {
  return browserify(paths.src + 'app.js', {debug: true})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.dist + 'js'))
  .pipe(gulpPlugins.connect.reload());
});

gulp.task('browserify-min', function () {
  return browserify(paths.src + 'app.js')
  .bundle()
  .pipe(source('app.min.js'))
  .pipe(gulpPlugins.streamify(gulpPlugins.uglify({mangle: false})))
  .pipe(gulp.dest(paths.dist + 'js'));
});

gulp.task('server', ['browserify'], function () {
  gulpPlugins.connect.server({
    root: 'app',
    livereload: liveReload,
  });
});

gulp.task('e2e', ['server'], function () {
  return gulp.src([paths.test + 'e2e/**/*.js'])
  .pipe(gulpPlugins.protractor.protractor({
    configFile: 'protractor.conf.js',
    args: ['--baseUrl', 'http://127.0.0.1:8080'],
  }))
  .on('error', function (e) {
    throw e;
  })
  .on('end', function () {
    gulpPlugins.connect.serverClose();
  });
});

gulp.task('watch', function () {
  gulp.start('server');
  gulp.watch([
    paths.src + '**/*.js',
    '!' + paths.src + 'third-party/**',
    paths.test + '**/*.js',
  ], ['fast']);

  gulp.watch(paths.sassWatch,['styles']);
});

gulp.task('build', function () {
  gulp.start('browserify');
  gulp.start('styles');
  gulp.start('images');
  gulp.start('icons');
});

gulp.task('fast', ['clean'], function () {
  gulp.start('browserify');
});

gulp.task('default', ['clean'], function () {
  liveReload = false;
  gulp.start('karma', 'browserify', 'browserify-min', 'e2e');
});