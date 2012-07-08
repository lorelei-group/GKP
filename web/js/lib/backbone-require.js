define([

	'zepto',
	'lib/underscore',
	'lib/backbone'

], function() {

	window._ = null;
	delete window._;

	window.$ = null;
	delete window.$;

	var back = window.Backbone;
	window.Backbone = null;
	delete window.Backbone;

	return back;

});
