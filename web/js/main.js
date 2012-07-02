//if (!localStorage.lists)
//	localStorage.lists = JSON.stringify([{name:'a'},{name:'b'}]);
//var lists = JSON.parse(localStorage.lists);

var lists =[];

for (var i = 0; i < 20; i++)
	lists[i] = { id: i + 1, name: "Item " + (i+1) };

function id(name) {
	return document.getElementById(name);
}


var pages = new Switcher();
pages.add('mainView', id('page-lists'));
pages.add('listView', id('page-tasks'));


setTimeout(function() {
	var loading = document.getElementById('load-placeholder');
	loading.parentNode.removeChild(loading);

	var list = id('lists-container');
	list.innerHTML = renderList(lists, 'name', 'You have no lists yet');

	var states = {};
	list.addEventListener('touchend', function(event) {
		var el = new DOM(event.target);

		if (el.hasClass('listItem')) {
			el.toogleClass('selected');
			var id = el.getData('id');
			states[id] = !states[id];
		}
	});

	pages.show('mainView');
}, 5000);
