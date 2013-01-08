module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    pandadocs:
      options:
        title: 'Testacular Documentation'
        assets: './templates/default/assets'
        output: './out'
        outputAssets: './out/assets'
        disableTests: true
      docs: [ 'src' ]
          
  
  grunt.loadTasks 'tasks'
  
  grunt.registerTask 'default', ['pandadocs']
