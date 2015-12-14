/**
 * @desc Home View
 * 
 *
 */
define([

	'jquery',
	'underscore',
	'backbone',
	'utils',
	'bootstrap'

],	function($, _, Backbone, Utils, Bootstrap){
	
	return Backbone.View.extend({
		
		// setup DOM Elements
		el : $('body'),
		
		// bind Events
		events: {

		},

		/**
		 * initialize()
		 * @desc initialize the view
		 *
		 * @param options
		 */
		initialize: function(options){
			console.log('App View');
		},
		
		/**
		 * render()
		 * @desc Render the view
		 * 
		 * 
		 */			
		render: function(){
			
			// No render
			
		}
				
	});
});