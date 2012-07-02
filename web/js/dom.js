var DOM = Base.extend({
	constructor: function(element) {
		this._dom = element;
	},

	addClass: function(name) {
		this._dom.className += ' ' + name;
	},

	removeClass: function(name) {
		this._dom.className = this._dom.className.replace(name, '').replace(/(^ +)|( +$)|(  +)/g, '');
	},

	hasClass: function(name) {
		return this._dom.className.indexOf(name) !== -1;
	},

	toogleClass: function(name) {
		if (this.hasClass(name))
			this.removeClass(name);
		else
			this.addClass(name);
	},

	getData: function(name) {
		return this._dom.getAttribute('data-' + name);
	}
});
