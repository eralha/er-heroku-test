
module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        compress: {},
        mangle: {
          except: ['jQuery', 'angular']
        }
      },
      build: {
        files: {
          'www/js/build/main.min.js': [ 'www/js/main.js' ]
        }
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};