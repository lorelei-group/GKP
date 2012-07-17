function funct(name) {
	return function(item) {
		item[name]();
	};
}

define(function() {
	"use strict";

	function Emitter() {
		this._listeners = {};
	}

	Emitter.prototype = {
		constructor: Emitter,

		listenersCount: function(signal) {
			var list = this._listeners[signal];
			return  list ? list.length : 0;
		},

		on: function(signal, handler, scope) {
			if (!this._listeners[signal])
				this._listeners[signal] = [];

			this._listeners[signal].push({
				funct: handler,
				scope: scope
			});
		},

		off: function(signal, handler, scope) {
			var list = this._listeners[signal];
			if (!list)
				return;

			this._listeners[signal] = list.filter(function(item) {
				return (
					item.funct !== handler ||
					item.scope !== scope
				);
			});
		},

		emit: function(signal) {
			this._listeners[signal].forEach(function(item) {
				item.funct.call(item.scope);
			});
		}
	};

	return Emitter;
});
