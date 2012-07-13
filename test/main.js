// This is key!
require.config({
	baseUrl: '../',

	paths: {
		Zepto: 'lib/zepto-require',
		Underscore: 'lib/underscore-require',
		Backbone: 'lib/backbone-require',
		Mustache: 'lib/mustache-require'
	}
});

require([
	'test/base.spec'
], function() {
	mocha.run();
});