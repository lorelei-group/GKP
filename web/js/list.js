define(['./base'], function(Base) {

	return Base.extend({
		constructor: function(element) {
			var self = this;
			function listener() {
				self.emit('item-touch', this.getAttribute('data-id'));
			}

			Base.call(this);
			this._dom = element;

			this._empty = "No data";
			this._itemTemplate = '{{.}}'

			this._dom.on('touchend', '.listItem', listener);
			this._dom.on('mouseup', '.listItem', listener);
		},

		setItems: function(items) {
			this._dom.empty();
			this._dom.html(this._renderItems(items));
		},

		setEmptyMessage: function(value) {
			this._empty = value;
		},

		setItemTemplate: function(tmpl) {
			this._itemTemplate = tmpl;
		},

		_renderItems: function(list) {
			return Mustache.render(
				'{{^items}}<div>' + this._empty + '</div>{{/items}}' +
				'{{#items}}' +
					'<div class="listItem" data-id="{{id}}">' + this._itemTemplate + '</div>' +
				'{{/items}}',
				{ items: list }
			);
		}
	});

});
