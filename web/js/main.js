//if (!localStorage.lists)
//	localStorage.lists = JSON.stringify([{name:'a'},{name:'b'}]);
//var lists = JSON.parse(localStorage.lists);

var lists =[{name:'a'},{name:'b'}];

function createPage() {
	return document.body.appendChild(render('<div class="page" id="showLists"></div>'));
}

var pages = new Switcher();
pages.add('mainView', createPage());
pages.add('listView', createPage());

setTimeout(function() {
	var loading = document.getElementById('load-placeholder');
	loading.parentNode.removeChild(loading);

	pages.get('mainView').appendChild(renderList(lists, 'You have no lists yet'));
	pages.show('mainView');
}, 500);
