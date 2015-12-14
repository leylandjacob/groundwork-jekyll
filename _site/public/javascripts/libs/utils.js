/**
 * @desc Utils
 * 
 *
 */
define([
	'jquery',
	'underscore',
	'config',
	'bowser'
	
],	function($, _, Config, bowser){
	
	Utils =  {

		/**
		 * getConfig() get the config
		 *
		 * @return {Object}
		 */
		getConfig: function() {
			if (Config) { 
				return Config;
			}
			return null;
		},
		
		/**
		 * guid() generates a guid id
		 *
		 *
		 * @return {String} returns a guid string
		 *
		 */
		guid: function() {
			return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
				   this.s4() + '-' + this.s4() + this.s4() + this.s4();
		},

		/**
		 * s4() generates a random number
		 *
		 *
		 * @return {String} returns a random number
		 *
		 */
		s4: function() {
			return Math.floor((1 + Math.random()) * 0x10000)
			   .toString(16)
			   .substring(1);
		},

		/**
		 * getFileExt() get a file extension name
		 *
		 * @param {String} filename
		 * @return {String} returns the extension name
		 *
		 */
		getFileExt: function(filename) {
			return filename.split('.').pop();
		},

		/**
		 * getUniqueName() get a unique file name
		 *
		 * @param {String} filename
		 * @return {String} returns guid + file extension
		 *
		 */
		getUniqueName: function(fileName) {
			return Utils.guid() + '.' + Utils.getFileExt(fileName);
		},

		/**
		 * getImagePath() get the full path to an image
		 *
		 * @param {String} image
		 * @param {String} folder (optional)
		 *
		 * @return {Object} returns full path to image on
		 *
		 */
		getImagePath: function(image, folder) {
			var config = Utils.getConfig();

			if (folder != '') {
				folder = folder + '/';
			}

			if (config.aws.cloudFront) {
				return 'https://' + config.cloudFront +  '/' + folder + image;
			}

			return 'https://' + config.aws.s3.bucket +  '.s3.amazonaws.com/' + folder + image;
		},

		/**
		 * getQueryVariable() get a query variable form
		 * the current window URL
		 *
		 * @param {String} variable
		 * @return {String} returns the key or null
		 *
		 */
		getQueryVariable: function(variable) {
			var query = window.location.search.substring(1);
			var vars = query.split('&');
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split('=');
				if (decodeURIComponent(pair[0]) == variable) {
					return decodeURIComponent(pair[1]);
				}
			}
			return null;
		},

		/**
		 * getIdFromUrl() get the id from
		 * the current window URL
		 *
		 * @return {String} returns the id
		 *
		 */
		getIdFromUrl: function() {
			return window.location.pathname.split('/').slice(-1).pop();
		},

		/**
		 * getFormData() get a forms data
		 *
		 *
		 * @return {String} id (name of the form to get data from)
		 *
		 */
		getFormData: function(id) {

			var $inputs = $('#' + id + ' :input');

			var values = {};
			$inputs.each(function() {

				values[this.name] = $(this).val();

			});

			return values;
		},

		/**
		 * 
		 * getSlug() convert a string to a slug
		 * 
		 * @param string
		 * @returns {string}
		 */
		getSlug: function( string ) {
			return string.toString().toLowerCase()
				.replace(/\s+/g, '-')           // Replace spaces with -
				.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
				.replace(/\-\-+/g, '-')         // Replace multiple - with single -
				.replace(/^-+/, '')             // Trim - from start of text
				.replace(/-+$/, '');            // Trim - from end of text
		},

		/**
		 *
		 * cleanSubdomain() convert a string to a slug
		 *
		 * @param string
		 * @returns {string}
		 */
		cleanSubdomain: function( string ) {
			return string.toString().toLowerCase()
				.replace(/\s+/g, '')           // Replace spaces with -
				.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
				.replace(/[0-9]/g, '')			// Remove all numbers
				.replace(/\_+/g, '')         	// Remove _
				.replace(/^-+/, '')             // Trim - from start of text
				.replace(/-+$/, '');            // Trim - from end of text
		},

		/**
		 * validateEmail() validate an email address
		 *
		 * @param {String} email
		 *
		 * @return {Boolean} returns true if valid
		 *
		 */
		validateEmail: function(email) {
			var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return re.test(email);
		},

		/**
		 *
		 * validatePasswordLength() validate password length
		 *
		 * @param password
		 * @return {Boolean} returns true if valid
		 */
		validatePasswordLength: function(password){
			return password.length > 6;
		},

		/**
		 *
		 * validatePasswordLength() validate password length
		 *
		 * @param password
		 * @return {Boolean} returns true if valid
		 */
		validatePasswordNumber: function(password){
			var re = /[0-9]/;
			return re.test(password);
		},

		/**
		 *
		 * validatePasswordLowercaseCharacter() validate password lowercase character
		 *
		 * @param password
		 * @return {Boolean} returns true if valid
		 */
		validatePasswordLowercaseCharacter: function(password){
			var re = /[a-z]/;
			return re.test(password);
		},

		/**
		 *
		 * validatePasswordUppercaseCharacter() validate password uppercase character
		 *
		 * @param password
		 * @return {Boolean} returns true if valid
		 */
		validatePasswordUppercaseCharacter: function(password){
			var re = /[A-Z]/;
			return re.test(password);
		},

		/**
		 *
		 * validatePasswordSpecialCharacter() validate password special character
		 *
		 * @param password
		 * @return {Boolean} returns true if valid
		 */
		validatePasswordSpecialCharacter: function(password){
			var re = /(?=.*[!@#$%^&*])/;
			return re.test(password);
		},

		/**
		 *
		 * validatePassword() check validation and return message
		 *
		 * @param password
		 * @param passwordConfirm
		 */
		validatePassword: function(password, needsConfirm, passwordConfirm) {

			// password required
			if(!password){
				this.alert(this.getConfig().messages.requiredPassword);
				return false;
			}

			// password length
			if(!this.validatePasswordLength(password)){
				this.alert(this.getConfig().messages.invalidPasswordLength);
				return false;
			}

			// password number
			if(!this.validatePasswordNumber(password)){
				this.alert(this.getConfig().messages.invalidPasswordNumber);
				return false;
			}

			// password lowercase character
			if(!this.validatePasswordLowercaseCharacter(password)){
				this.alert(this.getConfig().messages.invalidPasswordLowercaseCharacter);
				return false;
			}

			// password uppercase character
			if(!this.validatePasswordUppercaseCharacter(password)){
				this.alert(this.getConfig().messages.invalidPasswordUppercaseCharacter);
				return false;
			}

			// password special character
			if(!this.validatePasswordSpecialCharacter(password)){
				this.alert(this.getConfig().messages.invalidPasswordSpecialCharacter);
				return false;
			}
			
			// match to password
			if(needsConfirm) {
				if(!passwordConfirm){
					this.alert(this.getConfig().messages.requiredPasswordConfim);
					return false;
				} else if (password !== passwordConfirm) {
					this.alert(this.getConfig().messages.invalidPasswordsDontMatch);
					return false;
				} else {
					return true;
				}
			} else {
				return true;
			}

		},

		/**
		 * sortByOrder
		 * 
		 * @param list
		 * @returns {{value, index, criteria}}
		 */
		sortByOrder : function(list){
			
			return _.sortBy(list, 'order');
			
		},
		
		/**
		 * alert() shows an alert
		 *
		 * @param {Object} obj from Messages or custom
		 *
		 *
		 */
		alert: function(obj, delay){
			
			return alert('This would be an alert');
			
		},

		/**
		 * resetAlert() clears the last alert
		 *
		 *
		 *
		 */
		resetAlert: function(delay){

			// this would reset an alert
		},

		/**
		 * buttonLoading
		 *
		 * @param $button
		 */
		buttonLoading: function($button) {
			$button.addClass('loading');
		},

		/**
		 * buttonResetLoading
		 * 
		 * @param $button
		 */
		buttonResetLoading: function($button) {
			$button.removeClass('loading');
			$button.blur();
		},

		/**
		 * checkBrowser() Checks the browser for old versions and displays a message
		 *
		 *
		 *
		 */
		checkBrowser: function(){

			var oldBrowser = false;

			if(bowser.firefox && bowser.version < 26){
				oldBrowser = true;
			}

			if(bowser.chrome && bowser.version < 26){
				oldBrowser = true;
			}

			if(bowser.msie && bowser.version < 10){
				oldBrowser = true;
			}

			if(bowser.safari && bowser.version < 6.1){
				oldBrowser = true;
			}

			if(oldBrowser){
				$('.upgrade-browser').show();
			}

		}

	};
	
	return Utils;
	
});