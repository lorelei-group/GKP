define([ 'lib/mustache' ], function() {
	var mus = window.Mustache;

	window.Mustache = null;
	delete window.Mustache;

	return mus;
});
