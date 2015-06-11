module.exports = {
  bower: {
    // copy bower deps
    files: [{
      expand: true,
      cwd: 'bower_components',
      dest: 'dev/bower_components',
      src: '**'
    }]
  },
  fonts: {
    files: [
      // copy fontawesome fonts
      {
        expand: true,
        cwd: 'bower_components/font-awesome-stylus/fonts',
        src: ['**'],
        dest: 'assets/fonts'
      }
    ]
  },
  build: {
    files: [
    // copy assets
      {
        expand: true,
        cwd: 'dev/assets',
        dest: 'dist/assets',
        src: '**'
      }, {
        // copy index file
        src: 'dev/index.min.html',
        dest: 'dist/index.html',
      }, {
        // copy bower deps
        expand: true,
        cwd: 'bower_components',
        dest: 'dist/bower_components',
        src: '**'
      }
    ],
  },
  stage: {
    files: [
      {
        expand: true,
        cwd: 'dev/assets',
        dest: 'stage/assets',
        src: '**'
      }, {
        src: 'dev/index.html',
        dest: 'stage/index.html',
      }, {
        expand: true,
        cwd: 'bower_components',
        dest: 'stage/bower_components',
        src: '**'
      }
    ]
  }
};
