function renderList(list, data, emptyMessage) {
	return Mustache.render(
		'{{^items}}<div>' + emptyMessage + '</div>{{/items}}' +
		'{{#items}}' +
			'<div class="listItem" data-id="{{id}}">{{' + data + '}}</div>' +
		'{{/items}}',
		{ items: list }
	);
}
