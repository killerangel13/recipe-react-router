var gulp = require('gulp'),
	babel = require('gulp-babel'),
	util = require('gulp-util'),
	webpack = require('webpack'),
	path = require('path');

gulp.task('babel', function () {
	gulp.src('app/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('compiled'));
});

gulp.task('webpack', function (next) {
	webpack({
		entry: './compiled/app.js',
		output: {
			path: path.join(__dirname, '/public'),
			filename: 'bundle.js'
		}
	}, function (err, stats) {
		if (err)
			throw new util.PluginError('webpack', err);

		util.log('[webpack]', stats.toString({}));
		next();
	});
});