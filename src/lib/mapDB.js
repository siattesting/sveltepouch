// Example from learn.svelte.dev/tutorial/the-form-element

// In a real app, this data would live in a database,
// rather than in memory. But for now, we cheat.
const db = new Map();

export function getTodos(userid) {
	return db.get(userid);
}

export function createTodo(userid, title, content) {
	if (!db.has(userid)) {
		db.set(userid, []);
	}

	if (title === '') {
		throw new Error('Every post must have a title.');
	}
	if (content === '') {
		throw new Error('Every post must have some content.');
	}

	const todos = db.get(userid);

	todos.push({
		id: crypto.randomUUID(),
		title,
		content,
		done: false
	});
}

export function deleteTodo(userid, todoid) {
	const todos = db.get(userid);
	const index = todos.findIndex((todo) => todo.id === todoid);

	if (index !== -1) {
		todos.splice(index, 1);
	}
}
