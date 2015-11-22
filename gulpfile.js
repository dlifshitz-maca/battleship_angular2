var gulp = require('gulp');
var shell = require('gulp-shell');
var del = require('del');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var traceur = require('gulp-traceur');
var runSequence = require('run-sequence');

var PATHS = {
    src: {
      js: 'src/**/*.js',
      html: 'src/**/*.html'
    },
    lib: [
      'node_modules/gulp-traceur/node_modules/traceur/bin/traceur-runtime.js',
      'node_modules/systemjs/dist/system-csp-production.src.js',
      'node_modules/reflect-metadata/Reflect.js',
      'node_modules/angular2/bundles/angular2.js'
    ]
};

gulp.task('clean', function(cb) {
  del([
    './angular2',
    './rtts_assert',
    './dist'
  ], cb);
});

gulp.task('js', function () {
    return gulp.src(PATHS.src.js)
        .pipe(rename({extname: ''})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
        .pipe(plumber())
        .pipe(traceur({
            modules: 'instantiate',
            moduleName: true,
            annotations: true,
            types: true,
            memberVariables: true
        }))
        .pipe(rename({extname: '.js'})) //hack, see: https://github.com/sindresorhus/gulp-traceur/issues/54
        .pipe(gulp.dest('dist'));
});

gulp.task('html', function () {
    return gulp.src(PATHS.src.html)
        .pipe(gulp.dest('dist'));
});

gulp.task('libs', function () {
    var size = require('gulp-size');
    return gulp.src(PATHS.lib)
      .pipe(size({showFiles: true, gzip: true}))
      .pipe(gulp.dest('dist/lib'));
});

gulp.task('play', ['default'], function () {

    var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');

    var port = 9000, app;

    gulp.watch(PATHS.src.html, ['html']);
    gulp.watch(PATHS.src.js, ['js']);

    app = connect().use(serveStatic(__dirname + '/dist'));  // serve everything that is static
    http.createServer(app).listen(port, function () {
      open('http://localhost:' + port);
    });
});

gulp.task('default', ['js', 'html', 'libs']);
