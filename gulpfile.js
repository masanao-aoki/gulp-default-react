var gulp = require('gulp');
var webpack = require('gulp-webpack');
var watch = require('gulp-watch');
var connect = require('gulp-connect');

//setting
var webpackConfig = require('./webpack.config');
var settings = require('./gulpfile_settings');

gulp.task( 'html', function() {
    return gulp.src(
        [ settings.watch.html.files ],
            { base: 'src' }
        )
        .pipe( gulp.dest( settings.dest.html.dir )
    );
});

gulp.task('webpack', function () {
    return gulp.src('')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('')
    );
});

gulp.task('watch', ['html', 'webpack'], function(){
    gulp.watch(
        settings.watch.html.files,
        ['html']
    );
    gulp.watch(
        [
            settings.watch.js.files,
            settings.watch.es6.files
        ],
        ['webpack']
    );
});

gulp.task('webserver', function() {
    connect.server(
        {
            root: settings.dest.name,
            livereload: true,
            port: 8888
        }
    );
});

gulp.task('livereload', function() {
    gulp.src(settings.dest.name + '/**/*.*')
        .pipe(watch(settings.dest.name + '/**/*.*'))
        .pipe(connect.reload()
    );
});

gulp.task('default', ['watch', 'webserver', 'livereload']);
