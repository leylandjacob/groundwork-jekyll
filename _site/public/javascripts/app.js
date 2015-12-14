/**
 * @desc Initialize the App
 * 
 *
 */
define([
	'jquery',
	'underscore',
	'backbone',
	'router',
	'utils',
	'tether'
	
],	function($, _, Backbone, Router, Utils, Tether){
	
	var initialize = function(){
		
		// this is hack to get Tether for Bootstrap
		window.Tether = Tether;
		
		Router.initialize();
		
	};

	return {

	initialize: initialize

	};
  
});