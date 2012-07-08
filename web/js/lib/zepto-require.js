define([ 'lib/zepto' ], function() {

	var $ = window.Zepto;
	window.Zepto = null;
	delete window.Zepto;

	return $;
});
