module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    less:
      docs:
        files:
          'templates/default/assets/css/app.css': 'templates/default/assets/less/app.less'

    pandadocs:
      options:
        title: 'Testacular Documentation'
        assets: './templates/default/assets'
        output: './out'
        outputAssets: './out/assets'
        disableTests: true
      docs: ['src']
          
          
  
  grunt.loadTasks 'tasks'
  grunt.loadNpmTasks 'grunt-contrib-less'
  
  grunt.registerTask 'docs', ['pandadocs']
  grunt.registerTask 'default', ['less', 'docs']
