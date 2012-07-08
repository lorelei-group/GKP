define([
	'Mustache',
	'text!../../../templates/lists/item.html'
], function(Mustache, template) {
	return function(model) {
		return Mustache.render(template, model.attributes);
	};
});
