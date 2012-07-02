//if (!localStorage.lists)
//	localStorage.lists = JSON.stringify([]);
//var lists = JSON.parse(localStorage.lists);

define(function() {

	return {

		lists: [{
			id: 'asdf',
			name: "Things To Do",
			items: 6
		}, {
			id: 'fdsa',
			name: "Shopping List",
			items: 7
		}, {
			id: 'dfas',
			name: "Movies to Watch",
			items: 2
		}],

		tasks: {
			'fdsa': [{
				id: 0,
				pos: 0,
				name: "Buy roceries"
			}, {
				id: 1,
				pos: 1,
				name: "Mow the lawn"
			}, {
				id: 2,
				pos: 2,
				name: "Pick up dry cleaning"
			}, {
				id: 3,
				pos: 3,
				name: "Buy anniversary present"
			}, {
				id: 4,
				pos: 4,
				name: "Get a haircut"
			}, {
				id: 5,
				pos: 5,
				name: "Reply to morning emails"
			}]
		}
	};
});
