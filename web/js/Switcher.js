var Switcher = Base.extend({

	constructor: function() {
		this._elements = {};
		this._current = null;
	},

	add: function(id, element) {
		this._elements[id] = element;
	},

	get: function(id) {
		return this._elements[id];
	},

	show: function(id) {
		var els = this._elements;
		var target = els[id];

		if (!target)
			throw new Error('Unknown id --[' + id + ']--');

		if (this._current)
			els[this._current].style.display = 'none';

		this._current = id;
		target.style.display = 'block';
	}

});
