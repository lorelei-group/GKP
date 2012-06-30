var Base = {
	extend: function(config) {
		var parent = this;

		if (!config.hasOwnProperty('constructor'))
			config.constructor = function() { parent.apply(this, arguments); };

		var clazz = config.constructor;
		clazz.extend = this.extend;

		config.__proto__ = this;
		clazz.prototype = config;

		return clazz;
	}
};
