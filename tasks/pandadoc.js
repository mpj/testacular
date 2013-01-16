/*
 * grunt-pandadocs
 *
 * Copyright (c) 2013 Friedel Ziegelmayer
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  var wrench = require('wrench');
  var semver = require('semver');
  var path = require('path');
  var fs = require('q-io/fs');
  var q = require('q');

  var sep = require('os').platform() === 'win32' ? '\\' : '/';
  var panda = require('panda-docs');


  // Handle errors
  var errorHandler = function(error) {
    grunt.log.error(error);
  };

  // Map a folder of versions to an array of versions
  var getVersions = function(folder) {
    var guard = function(path, stat) {
      if (stat.isDirectory() && path.split(sep).length === 2) {
        return true;
      }
      return false;
    };
    return fs.listTree(folder, guard).then(function(dirs){
      return dirs.map(function(dir) {
        return dir.replace(folder + sep, '');
      }).filter(function(version) {
        return semver.valid(version);
      });
    });

  };

  var getFileList = function(srcPath, outPath) {
    // Only add directories and markdown files
    var guard = function(p, stat) {
      if(stat.isDirectory()) return true;
      if(p.split('.').pop() === 'md') return true;
      return false;
    };
    return fs.listTree(srcPath, guard).then(function(dirs) {
      var list = {};
      dirs.forEach(function(dir) {
        dir = dir.split(sep);
        // Remove the first two (src, version)
        dir.shift();
        dir.shift();
        if (dir.length === 0) return;

        // Add to object
        // dir looks now like this: ['category'] or ['category', 'article.md']
        var key = dir.shift();
        if (dir.length === 0) {
          if (key.indexOf('.md') > -1) return;
          list[key] = [];
        } else {
          var name = dir.shift().replace(/\.md$/, '');
          list[key].push({
            name: name,
            link: path.join(name + '.html')
          });
        }
      });

      return list;
    });
  };

  // Generate docs for one specific version
  var docsForVersion = function(version, options) {
    var srcPath = path.join(options.source, version);
    var outPath = path.join(options.output, version);
    var buildOptions = options;

    buildOptions.output = outPath;
    buildOptions.highlight = true;
    buildOptions.currentVersion = version;

    var srcArray = [
      srcPath
    ];

    var basePath = path.join(__dirname, '..');
    var sharedFiles = [
      {src: 'CONTRIBUTING', dest: 'dev/Contributing'}
    ];

    // Copy the shared data to the folder of this version
    return q.all(sharedFiles.map(function(file) {
      grunt.log.ok('Copying shared files...');
      var src = path.join(basePath, file.src + '.md' );
      var dest = path.join(srcPath, file.dest + '.md');
      return fs.copy(src, dest);
    })).then(function() {
      return getFileList(srcPath, outPath);
    }).then(function(fileList){
      grunt.log.ok('Building version ' + version);
      buildOptions.fileList = fileList;

      var deferred = q.defer();

      panda.make(srcArray, buildOptions, function(error, filesObject) {
        if (error) {
          deferred.reject(error);
        }
        deferred.resolve(filesObject.files);
      });
      return deferred.promise;

    }).fail(errorHandler);

  };


  // The Task itself
  grunt.registerMultiTask('pandadocs', 'Generate docs using panda-docs.', function() {
    // This is an async task.
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options();

    var sourceFolders = this.filesSrc;
    q.all(sourceFolders.map(function(folder) {
      return getVersions(folder).then(function(versions) {
        // Add additional information to the options object to be passed
        // into docsForVersion
        options.source = folder;
        options.versions = versions;

        return q.all(versions.map(function(version) {
          return docsForVersion(version, options);
        }));
      });
    })).then(done, function(error){
      grunt.log.error(error);
      done(1);
    });

  });



};