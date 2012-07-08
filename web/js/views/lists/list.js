define([

	'Zepto',
	'Backbone',
	'Mustache',

	'collections/lists',
	'views/lists/item',
	'text!../../../templates/lists/list.html'

], function($, Backbone, Mustache, ListCollection, renderList, template) {

	var ListListView = Backbone.View.extend({

		render: function() {
			var collection = new ListCollection;
			collection.add({
				id: 'temp',
				name: "Todo tomorrow"
			});

			items = collection.map(renderList);
			return Mustache.render(template, items);
		}
	});

	return new ListListView;
});
