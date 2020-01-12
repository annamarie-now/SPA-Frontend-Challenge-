module.exports = function(grunt){

  grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),
cssmin:{
    combine:{
        files:{
            '/src/css/mainMin.css': ['/src/css/app.scss', '/src/css/homepage.scss', '/src/css/navbar.scss', '/src/css/tables.scss', '/src/css/imprint.scss']
        }
    }
},
uglify:{
    dist:{
        files:{
            '/src/App.min.js':['/src/App.js', '/src/components/home.js', '/src/components/navbar.js', '/src/components/stars.js', '/src/components/universes.js', '/src/components/imprint.js']
        }
    }
}

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['cssmin'], ['uglify']);
};