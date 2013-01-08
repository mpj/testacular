/*
 * grunt-pandadocs
 *
 * Copyright (c) 2013 Friedel Ziegelmayer
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  var fs = require('fs');
  var wrench = require('wrench');
  var semver = require('semver');
  var path = require('path');

  var panda = require('panda-docs');

  grunt.registerMultiTask('pandadocs', 'Generate docs using panda-docs.', function() {
    // This is an async task.
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    var files = this.file.src;

    files.forEach(function(dir) {
      fs.readdir(dir, function(error, fileList) {
        var sourceFiles = wrench.readdirSyncRecursive(dir).sort();
        var versions = sourceFiles.filter(function(dir){
          if (dir.indexOf("/") < 0 && semver.valid(dir)) {
            return true;
          }
          return false;
        });

        grunt.log.ok(versions);
        versions.forEach(function(version) {
          var _options = options;
          _options.output = path.join(options.output, version);
          grunt.verbose.writeflags(options, 'Panda-docs options');
          var input = [
            path.join(dir, 'index.md'),
            path.join(dir, version, 'about'),
            path.join(dir, version, 'config'),
            path.join(dir, version, 'dev'),
            path.join(dir, version, 'intro'),
            path.join(dir, version, 'plus')
          ];
          panda.make(input, _options, function(error, result) {
            if (error) {
              grunt.log.errorlns('There was an error', error);
              return done(false);
            }
            // Otherwise, print a success message.
            grunt.log.ok('Created ' + result.files.length + ' files.');
            return done();
          });
        });
      });
    });

  });

};