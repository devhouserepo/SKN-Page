const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

var sassOptions = {
  errLogToConsole: true,
  outputStyle: "expanded"
};
// Compile Sass & Inject Into Browser
gulp.task("sass", function() {
  return gulp
    .src([
      "node_modules/bootstrap/scss/bootstrap.scss",
      "src/assets/scss/*.scss"
    ])
    .pipe(sass(sassOptions).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("src/temp/css"))
    .pipe(browserSync.stream());
});

// Move JS Files to src/js
gulp.task("js", function() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/popper.js/dist/umd/popper.min.js",
      "src/assets/js/app.js"
    ])
    .pipe(gulp.dest("src/temp/js"))
    .pipe(browserSync.stream());
});
gulp.task("Appjs", function() {
  return gulp
    .src("src/assets/js/app.js")
    .pipe(gulp.dest("src/temp/js"))
    .pipe(browserSync.stream());
});

// Watch Sass & Serve
gulp.task("serve", ["sass"], function() {
  browserSync.init({
    server: "./src"
  });

  gulp.watch(
    ["node_modules/bootstrap/scss/bootstrap.scss", "src/assets/scss/**/*.scss"],
    ["sass"]
  );
  gulp.watch("src/*.html").on("change", browserSync.reload);
});

// Watch App.js
gulp.task("ScriptsRefresh", ["Appjs"], function() {
  gulp.watch(["src/assets/js/app.js"], ["Appjs"]);

  gulp.watch("src/assets/js/*.js").on("change", browserSync.reload);
});

// Move Fonts to src/fonts
gulp.task("fonts", function() {
  return gulp
    .src("node_modules/font-awesome/fonts/*")
    .pipe(gulp.dest("src/temp/fonts"));
});

// Move Font Awesome CSS to src/css
gulp.task("fa", function() {
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest("src/temp/css"));
});

gulp.task("watch", ["js", "serve", "ScriptsRefresh", "fa", "fonts"]);
