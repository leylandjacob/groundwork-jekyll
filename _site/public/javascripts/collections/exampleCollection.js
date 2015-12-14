/**
 * @desc User Model
 * 
 *
 */
define([
  'underscore',
  'backbone',
  'models/exampleModel'

], function(_, Backbone, exampleModel){

	return Backbone.Collection.extend({
		
		model : exampleModel,

		url: '/api/example/all',
		
		// initialize the collection
		initialize: function(options){
			
		}

	});
	
});