module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    less:
      docs:
        files:
          'templates/default/assets/css/app.css': 'templates/default/assets/less/app.less'

    pandadocs:
      options:
        title: 'Testacular'
        assets: './templates/default/assets'
        output: './public'
        outputAssets: './public/assets'
        disableTests: true
        skin: './templates/default'
      docs: ['src']
          
          
  
  grunt.loadTasks 'tasks'
  grunt.loadNpmTasks 'grunt-contrib-less'
  
  grunt.registerTask 'docs', ['pandadocs']
  grunt.registerTask 'default', ['less', 'docs']
