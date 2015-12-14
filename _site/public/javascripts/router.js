/**
 * @desc Client Side Router
 * 
 *
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'utils'
	
],	function($, _, Backbone, Utils){
	
		var AppRouter = Backbone.Router.extend({
			
			routes: {
				'': 'app'
			}
			
		});
		
		var initialize = function(){

			// check browser
			Utils.checkBrowser();
		
			router = new AppRouter;
			
			/**
			 * Home/App View
			 */
			router.on('route:app', function(){

				console.log('App Route');
				require(['views/app'], function (AppView) {
					var appView = new AppView();
				});
			
			});
			
			// start history
			Backbone.history.start({pushState: true});
		
		};
		
	return {
		
		initialize : initialize
		
	};
	
});

