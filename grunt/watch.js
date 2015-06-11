module.exports = {
	dev: {
        files: ['Gruntfile.js', 'dev/app/**/*.styl', 'dev/app/**/*.html', 'dev/app/**/*.js'],
        tasks: ['stylus', 'jshint'],
        options: {
            livereload: true
        }
    },
    stage: {
        files: ['Gruntfile.js', 'dev/app/**/*.styl', 'dev/app/**/*.html', 'dev/app/**/*.js'],
        tasks: ['stylus', 'jshint', 'copy:stage', 'requirejs:dist'],
        options: {
            livereload: true
        }
    }
};