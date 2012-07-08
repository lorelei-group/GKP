define(function() {
	return function(prop) {
		var value = window[prop];
		window[prop] = null;
		delete window[prop];
		return value;
	};
});
