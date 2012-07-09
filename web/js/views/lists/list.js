define([

	'Zepto',
	'Backbone',
	'Mustache',

	'collections/lists',
	'text!../../../templates/lists/list.html'

], function($, Backbone, Mustache, ListCollection, template) {

	var ListListView = Backbone.View.extend({

		render: function() {
			var collection = new ListCollection([{
				id: 'temp',
				name: "Todo tomorrow"
			}, {
				id: 'tamp',
				name: "Todo today"
			}, {
				id: 'pepe',
				name: "Todo never"
			}]);

			return Mustache.render(template, collection.toJSON());
		}
	});

	return new ListListView;
});
