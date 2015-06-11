module.exports = {
  dist: {
    options: {
      uglify2: {
        mangle: false
      },
      appDir: "dev/app",
      dir: "dist/app",
      baseUrl: "./",
      mainConfigFile: "dev/app/main.js",
      optimize: 'uglify2'
    }
  },
  stage: {
    options: {
      uglify2: {
        mangle: false
      },
      appDir: "dev/app",
      dir: "stage/app",
      baseUrl: "./",
      mainConfigFile: "dev/app/main.js",
      optimize: 'uglify2'
    }
  }
};
