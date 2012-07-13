define([

	'lib/removeGlobal',
	'Zepto',
	'Underscore',
	'lib/backbone'

], function(removeGlobal) {
	removeGlobal('Zepto');
	removeGlobal('_');
	return removeGlobal('Backbone');
});
