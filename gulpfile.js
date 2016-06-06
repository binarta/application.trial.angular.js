var gulp = require('gulp'),
    minifyHtml = require('gulp-minify-html'),
    templateCache = require('gulp-angular-templatecache'),
    path = require('path'),
    less = require('gulp-less');

var minifyHtmlOpts = {
    empty: true,
    cdata: true,
    conditionals: true,
    spare: true,
    quotes: true
};

gulp.task('bootstrap3', function () {
    gulp.src('template/bootstrap3/*.html')
        .pipe(minifyHtml(minifyHtmlOpts))
        .pipe(templateCache('application-trial-tpls-bootstrap3.js', {standalone: false, module: 'application.trial'}))
        .pipe(gulp.dest('src'));
});

gulp.task('compileLess', function () {
    return gulp.src('less/*.less')
        .pipe(less({paths: [path.join(__dirname, 'less', 'includes')]}))
        .pipe(gulp.dest('css'));
});

gulp.task('default', ['bootstrap3', 'compileLess']);