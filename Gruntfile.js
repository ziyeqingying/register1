module.exports = function(grunt) {
    grunt.initConfig({
        htmlmin: {
            options: {
                collapseWhitespace: true
            },
            files: {
                src: "./index.html",
                dest: "./dist/index.html"
            }
        },
        cssmin: {
            "dist/index.css": "index.css"
        },
        uglify: {
            release: {
                files: {
                    "dist/index.min.js": "index.js"
                }
            }
        },
        useminPrepare: {
            html: "index.html",
            options: {
                dest: "dist"
            }
        },
        usemin: {
            html: ["dist/index.html"]
        }
    })
    grunt.loadNpmTasks("grunt-contrib-htmlmin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    grunt.registerTask("minify", ['useminPrepare', 'uglify','usemin', 'htmlmin', 'cssmin']);
}