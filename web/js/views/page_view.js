define([

	'Zepto',
	'Mustache',
	'Backbone',

	'text!../../templates/page.html'

], function($, Mustache, Backbone, pageTemplate){

	var Page = Backbone.View.extend({
		el: null,

		render: function() {
			this.el = $(Mustache.render(pageTemplate, {
				name: this.name,
				header: this.header,
				footer: this.footer,
				html: this.html
			}));

			document.body.appendChild(this.el[0]);

			this.render = function() {
				this._render()
				this.show();
			};
			this.render();
		},

		show: function() {
			this.el.show();
		},

		hide: function() {
			this.el.hide();
		}
	});

	return Page;
});
