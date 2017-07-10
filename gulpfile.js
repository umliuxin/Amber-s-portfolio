var gulp = require('gulp');
var sass = require('gulp-sass');
// var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
// var imagemin = require('gulp-imagemin');
// var nunjucksRender = require('gulp-nunjucks-render');
// var include       = require("gulp-include");

// gulp.task('nunjucks', function() {
//   // Gets .html and .nunjucks files in pages
//   return gulp.src('app/views/[^_]*.+(html|njk)')
//   // Renders template with nunjucks
//   .pipe(nunjucksRender({
//       path: ['app/views']
//     }))
//   // output files in app folder
//   .pipe(gulp.dest('dist'))
// });

gulp.task('compile-scss', function() {
  //Precompile Scss to css
  return gulp.src('sass/application.scss')
    .pipe(sass())
    .pipe(cssnano())
    .pipe(gulp.dest('css/'))
});

// gulp.task('images', function(){
//   return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
//   .pipe(imagemin())
//   .pipe(gulp.dest('dist/images'))
// });
//
// gulp.task('fonts', function() {
//   return gulp.src('app/fonts/**/*')
//   .pipe(gulp.dest('dist/fonts'))
// });

// gulp.task('compile-js', function () {
//     return gulp.src('app/js/[^_]*.js') // path to your files
//     .pipe(include({
//       includePaths: [
//         __dirname + "/node_modules",
//         __dirname + "/app/js"
//       ]
//     }))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });

gulp.task('watch',['compile-scss'], function() {
  gulp.watch(['sass/*.scss', 'sass/**/*.scss'], ['compile-scss']);
});

gulp.task('default',['compile-scss']);
