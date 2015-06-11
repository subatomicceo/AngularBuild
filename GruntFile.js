module.exports = function(grunt) {
  var gtx = require('gruntfile-gtx').wrap(grunt);

  gtx.loadAuto();

  var gruntConfig = require('./grunt');
  gruntConfig.package = require('./package.json');

  gtx.config(gruntConfig);

  gtx.alias('default', ['copy:fonts', 'copy:bower', 'stylus', 'jshint', 'connect:dev', 'watch']);

  gtx.alias('stage', ['copy:fonts', 'stylus', 'copy:stage', 'jshint', 'requirejs:stage', 'connect:stage', 'watch']);

  gtx.alias('build', ['copy:fonts', 'stylus', 'copy:build', 'jshint', 'requirejs:dist']);

  gtx.finalise();
};
