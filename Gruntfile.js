module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            'generated': ['pages/*Page.js', 'flows/*FlowBase.js', 'pages/*Page.json']
        },
        'merge-json': {
            pageJson: {
              files: grunt.file.expandMapping('pages/*Page_.json', '', {
                rename: function (base, src) {
                  return src.replace(new RegExp('pages/(\.+)Page_.json'), 'pages/$1Page.json')
                }
              })
              .map(function(item) {
                if (item.src != 'pages/HomePage_.json')
                  item.src.push('pages/Navbar_.json');
                return item;
              })
            }
        },
        'compile-handlebars': {
            pageObjects: {
                files: [{
                    src: 'templates/page.handlebars',
                    dest: grunt.file.expand('pages/*Page.json')
                        .map(function(path) {
                            return path.replace(new RegExp('pages/(\.+)Page.json'), 'pages/$1Page.js');
                        })
                }],
                templateData: grunt.file.expand('pages/*Page.json'),
                helpers: 'templates/helpers/ifx.js'
            },
            baseFlows: {
                files: [{
                    src: 'templates/flowBase.handlebars',
                    dest: grunt.file.expand('pages/*Page.json')
                        .map(function(path) {
                            return path.replace(new RegExp('pages/(\.+)Page.json'), 'flows/$1FlowBase.js');
                        })
                }],
                templateData: grunt.file.expand('pages/*Page.json'),
                helpers: 'templates/helpers/ifx.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-merge-json');
    grunt.loadNpmTasks('grunt-compile-handlebars');

    // Default task(s).
    grunt.registerTask('default', ['clean:generated', 'merge-json', 'compile-handlebars']);

};
