define([

	'Zepto',
	'Backbone',

	'views/pages/lists',
	//'views/pages/task'

], function($, Backbone, listPage) {

	var currentPage;

	function show(page) {
		if (currentPage)
			currentPage.hide();

		currentPage = page;
		page.render();
	}

	var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'start',
			'lists': 'showLists',

			'*actions': 'defaultAction'
		},

		initialize: function() {
			$('#load-placeholder').remove();
		},

		start: function() {
			this.navigate('lists');
		},

		showLists: function() {
			show(listPage);
		},

		defaultAction: function(actions){
			console.log('No route:', actions);
		}
	});

	return {
		init: function() {
			new AppRouter;
			Backbone.history.start();
		}
	};
});
