define(['./data', './list', './switcher'], function(data, List, Switcher) {

	var pages = new Switcher();
	pages.add('mainView', $('#page-lists'));
	pages.add('listView', $('#page-tasks'));

	var list = new List($('#lists-container'));
	list.setEmptyMessage('You have no lists yet')
	list.setItemTemplate('{{name}}');
	list.setItems(data.lists);

	var tasks = new List($('#tasks-container'));
	tasks.setEmptyMessage('No tasks here! Well done ;)')
	tasks.setItemTemplate('{{name}}');

	list.on('item-touch', function(id) {
		tasks.setItems(data.tasks[id]);
		pages.show('listView');
	});

	$('#page-tasks').on('swipeRight', function() {
		pages.show('mainView');
	});

	setTimeout(function() {
		$('#load-placeholder').remove();
		pages.show('mainView');
	}, 1000);

});
