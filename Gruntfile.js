module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },
      files: ['Gruntfile.js', 'src/**/*.js']
    },

    concat: {
      options: {
        separator: ';'
      },
      build: {
        src: ['src/**/*.js'],
        dest: 'build/app.min.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'build/app.min.js',
        dest: 'build/app.min.js'
      },
    },

    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    nodemon: {
      dev: {
        script: 'build/app.min.js',
        watch: ['build'],
        ignore: ['src']
      }
    },

    watch: {
      files: ['<%= jshint.files %>'],
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', '', function () {
    var taskList = [
      'jshint',
      'concat',
      'uglify',
      'concurrent'
    ];
    grunt.task.run(taskList);
  });
}; 