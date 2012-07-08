define([
	'Zepto',
	'views/page_view',
	'views/lists/list'
], function($, PageView, listListView) {

	var ListsPageView = PageView.extend({
		name: 'lists',

		_render: function() {
			var body = $('.body', this.el);

			this._render = function() {
				body.html(listListView.render())
			};

			return this._render();
		}
	});

	return new ListsPageView;
});
