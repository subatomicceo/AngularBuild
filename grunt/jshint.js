module.exports = {
    jshint: {
        files: {
            src: ['dev/app/**/*.js']
        },
        options: {
            globals: {
                jQuery: true,
                console: true,
                module: true,
                document: true
            }
        }
    }
};