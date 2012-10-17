define(function(require) {
	var Emitter = require('./emitter');

	function Base(injection) {
		this.emitter = injection.emitter || new Emitter();
	}

	Base.prototype = {
		on: function() {
			this.emitter.on()
		}
	};

	return Base;
})
