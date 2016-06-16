module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            options: {
                compress: true
            },
            applib: {
                src: [
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-aria/angular-aria.min.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-resource/angular-resource.min.js'
                ],
                dest: 'app/lib/scripts.min.js'
            }
        }
    });

    grunt.registerTask("default", ["bower:install"]);
    grunt.loadNpmTasks("grunt-contrib-copy");
};