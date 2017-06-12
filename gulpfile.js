var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var rename = require("gulp-rename");
var sourcemaps = require('gulp-sourcemaps');

var Files = {

    html : './index.html',
    css_dest : './css',
    scss : './sass/style.scss'

};


gulp.task('sass', function() {
return gulp.src('sass/style.scss')
.pipe(sass({errLogToConsole:true}))
.pipe(gulp.dest('css'))
})
gulp.task('default', ['sass'], function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch(Files.html, browserSync.reload);
});
