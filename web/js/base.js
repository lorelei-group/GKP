define(function() {

	var Base = function() {
		this._listeners = {};
	};

	Base.extend = function(config) {
		var parent = this;

		if (!config.hasOwnProperty('constructor'))
			config.constructor = function() { parent.apply(this, arguments); };

		var clazz = config.constructor;
		clazz.extend = this.extend;

		config.__proto__ = this.prototype;
		clazz.prototype = config;

		return clazz;
	};

	Base.prototype = {

		on: function(signal, handler) {
			if (!this._listeners[signal])
				this._listeners[signal] = [];
			this._listeners[signal].push(handler);
		},

		off: function(signal, handler) {
			if (!this._listeners[signal])
				return;

			var list = this._listeners[signal];
				index = list.indexOf(handler);

			if (index !== -1)
				list.splice(index, 1);
		},

		once: function(signal, handler) {
			var self = this;
			this.on(signal, function callee() {
				self.off(signal, callee);
				handler.apply(this, arguments);
			})
		},

		emit: function(signal, var_args) {
			if (!this._listeners[signal])
				return;

			var list = this._listeners[signal],
				args = arguments.length > 1 ?
					Array.prototype.slice.call(arguments, 1) : null;

			for (var i = 0, len = list.length; i < len; i++)
				list[i].apply(null, args);
		}
	};

	return Base;
});
