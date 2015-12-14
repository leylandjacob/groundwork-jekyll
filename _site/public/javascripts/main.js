requirejs.config({
	paths: {
		'jquery' : '../node_modules/jquery/dist/jquery.min',
		'underscore' : '../node_modules/underscore/underscore-min',
		'backbone' : '../node_modules/backbone/backbone',
		'utils' : 'libs/utils',
		'config' : 'libs/config',
		'bowser' : '../node_modules/bowser/src/bowser',
		'tether' : '../node_modules/tether/dist/js/tether.min',
		'bootstrap' : 'libs/bootstrap.min'
	},
	
	shim: {
		'bootstrap' : {
			deps: ['tether', 'jquery'],
			exports: 'Bootstrap'
		}
	}

});

require([ 'app' ], function(App){
	
	App.initialize();

});