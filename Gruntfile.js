module.exports = function(grunt){

  grunt.initConfig({
 concat: {
     js: {
         src: ['./src/App.js', './src/components/*.js'],
         dest: 'build/scripts.js'
     },
     css: {
        src: ['./src/css/*.scss'],
        dest: 'build/styles.css'
 }}

  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-uglify');


  //grunt.registerTask('default', ['cssmin','uglify']);
};