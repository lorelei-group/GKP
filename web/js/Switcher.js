var Switcher = Base.extend({

	constructor: function() {
		this._elements = {};
	},

	add: function(id, element) {
		this._elements[id] = element;
		element.style.display = 'none';
	},

	get: function(id) {
		return this._elements[id];
	},

	show: function(id) {
		var els = this._elements;
		var target = els[id];

		if (!target)
			throw new Error('Unknown id --[' + id + ']--');

		for (var i in els)
			if (els.hasOwnProperty(i) && els[i] !== target)
				els[i].style.display = 'none';

		target.style.display = 'block';
	}

});
