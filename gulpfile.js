var gulp = require('gulp');
var concat = require('gulp-concat');
var minify = require('gulp-minify');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {
    return gulp.src(['./assets/js/vendor/*.js'])
        .pipe(concat('bundle.js'))
        .pipe(minify({
    ext:{
        min:'.js'
    },
    noSource: true
}))
        .pipe(gulp.dest('public/build/js'));
});

gulp.task('pack-css', function () {
    return gulp.src(['./assets/css/*.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(cleanCss())
        .pipe(gulp.dest('./public/build/css'));
});

// gulp.task(name, gulp.{series|parallel}(deps, func)) 	
	
//gulp.task('run', ['pack-js', 'pack-css']);
	
	gulp.task('run', gulp.parallel('pack-css', 'pack-js'));
gulp.task('watch', function() {	
	gulp.watch('./assets/js/vendor/*.js', gulp.series('pack-js'));
    gulp.watch('./assets/css/*.css', gulp.series('pack-css'));
})
 gulp.task('default', gulp.parallel('run', 'watch'));
//gulp.task('default', ['pack-js', 'pack-css']);