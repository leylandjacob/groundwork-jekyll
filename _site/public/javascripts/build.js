/**
 * @desc Start the App
 * 
 * RUN: node r.js -o include=requireLib build.js
 */
({
    baseUrl: ".",
    paths: {
		requireLib: 'require',
		'jquery' : '../node_modules/jquery/dist/jquery.min',
		'underscore' : '../node_modules/underscore/underscore-min',
		'backbone' : '../node_modules/backbone/backbone',
		'utils' : 'libs/utils',
		'config' : 'libs/config',
		'bowser' : '../node_modules/bowser/src/bowser',
		'tether' : '../node_modules/tether/dist/js/tether.min',
		'bootstrap' : 'libs/bootstrap.min'
	},
	optimize: "uglify2",
	preserveLicenseComments: false,
	findNestedDependencies: true,
	generateSourceMaps: true,
	include: 'requireLib',
    name: "main",
    out: "main-built.js"
	
})