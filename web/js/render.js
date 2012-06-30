var creator = document.createElement('div');
function render(markup, data) {
	creator.innerHTML = Mustache.render(markup, data);
	var el = creator.firstChild;
	creator.removeChild(el);

	if (creator.firstChild)
		throw new Error('Render output must have a only one container element');

	return el;
}

function renderList(list, emptyMessage) {
	return render(
		'<div class="list">' +
			'{{^items}}' + emptyMessage + '{{/items}}' +
			'{{#items}}' +
				'<div class="listItem">{{name}}</div>' +
			'{{/items}}' +
		'</div>',
		{ items: lists }
	);
}
