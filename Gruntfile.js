module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n' +
                '* <%= pkg.name %>.js v<%= pkg.version %> by @50onred\n' +
                '*/\n',
        jqueryCheck: 'if (!jQuery) { throw new Error(\"Bootstrap requires jQuery\") }\n\n',
        flask_static: 'flask_bootstrap/static',
        bower: grunt.file.readJSON('.bowerrc'),
        // Task configuration.

        // Run grunt on fifty packages to make sure everything updated
        // Clean bootstrap files
        clean: {
            flask_css: {
                src: ['<%= flask_static %>/css/**']
            },
            flask_js: {
                src: ['<%= flask_static %>/js/vendor/**']
            },
            flask_less: {
                src: ['<%= flask_static %>/less/bootstrap/**', '<%= flask_static %>/less/font-awesome/**']
            },
            flask_misc: {
                src: ['<%= flask_static %>/fonts/**', '<%= flask_static %>/img/**']
            }
        },

        copy: {
            bootstrap: {
                files: [{
                    expand: true,
                    cwd: '<%= bower.directory %>/bootstrap/js/',
                    src: ['*.js'],
                    dest: '<%= flask_static %>/js/vendor/bootstrap/'
                },
                {
                    expand: true,
                    cwd: '<%= bower.directory %>/bootstrap/fonts/',
                    src: ['*'],
                    dest: '<%= flask_static %>/fonts/'
                },
                {
                    expand: true,
                    cwd: '<%= bower.directory %>/bootstrap/less/',
                    src: ['*.less'],
                    dest: '<%= flask_static %>/less/bootstrap/'
                }
                ]
            },
            font_awesome: {
                files: [{
                    expand: true,
                    cwd: '<%= bower.directory %>/font-awesome/less/',
                    src: ['*.less'],
                    dest: '<%= flask_static %>/less/font-awesome/'
                },{
                    expand: true,
                    cwd: '<%= bower.directory %>/font-awesome/font/',
                    src: ['**'],
                    dest: '<%= flask_static %>/fonts/'
                }]
            }
        },


        // run recess on bootstrap css/less files
        recess: {
            options: {
                compile: true
            },
            flask: {
                files: {
                    '<%= flask_static %>/css/bootstrap.css': ['<%= flask_static %>/less/flask-bootstrap/flask.less']
                }
            },
            min: {
                options: {
                    compress: true
                },
                files: {
                    '<%= flask_static %>/css/bootstrap.min.css': ['<%= flask_static %>/less/flask-bootstrap/flask.less']
                }
            }
        },

        watch: {
            bootstrap: {
                files: ['<%= flask_static %>/less/**/*.less'],
                tasks: ['recess:bootstrap']
            }
        }
    });


    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-recess');

    grunt.registerTask('dist', ['clean', 'copy', 'recess']);

    // Default task.
    grunt.registerTask('default', ['dist']);
};
