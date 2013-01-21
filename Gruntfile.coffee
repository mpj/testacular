module.exports = (grunt) ->

  # Project configuration.
  grunt.initConfig
    less:
      docs:
        files:
          'templates/default/assets/css/app.css': 'templates/default/assets/less/app.less'

    concat:
      options:
        seperator: ';'
      docs:
        src: [
          'templates/default/assets/js/jquery.js'
          'templates/default/assets/js/jquery.easing.js'
          'templates/default/assets/js/ddsmoothmenu.js'
          'templates/default/assets/js/jquery.flexslider.js'
          'templates/default/assets/js/colortip.js'
          'templates/default/assets/js/selectnav.js'
          'templates/default/assets/js/custom.js'
        ]
        dest: 'templates/default/assets/js/app.js'
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
  grunt.loadNpmTasks 'grunt-contrib-concat'
  
  grunt.registerTask 'build', ['less', 'concat']
  grunt.registerTask 'docs', ['pandadocs']
  grunt.registerTask 'default', ['build', 'docs']
