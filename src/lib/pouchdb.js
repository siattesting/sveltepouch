import PouchDB from 'pouchdb';

const db = new PouchDB('my-db2');

/**
 * @param {any} post
 */
export async function createPost(post) {
	if (post.title === '') {
		throw new Error('You must provide a title');
	}
	if (post.content === '') {
		throw new Error('You must provide a content');
	}
	post.created_at = new Date().toISOString();
	post.updated_at = new Date().toISOString();
	post.type = 'posts';
	post._id = 'post:' + new Date().toISOString();

	const result = await db.post(post);
	return result;
}

/**
 * @param {string} id
 */
export async function readPost(id) {
	const post = await db.get(id);
	return post;
}

/**
 * @param {PouchDB.Core.RemoveDocument} doc
 */
export async function deleteDoc(doc) {
	const result = await db.remove(doc);
	return result;
}

export async function listPosts() {
	const result = await db.allDocs({ include_docs: true });
	const posts = result.rows.map((row) => row.doc);
	return posts;
}

export async function getPosts() {
	const { rows } = await db.allDocs({ include_docs: true });
	const results = rows.filter((row) => row.doc.type === 'posts' || row.doc.type === 'post');
	return results.map(({ doc }) => doc);
}

export async function getTodos() {
	const { rows } = await db.allDocs({ include_docs: true });
	const results = rows.filter((row) => row.doc.type === 'todos' || row.doc.type === 'todo');
	return results.map(({ doc }) => doc);
}
/**
 * @param {any} todo
 */
export async function createTodo(todo) {
	if (todo.title === '') {
		throw new Error('You must provide a title');
	}
	if (todo.content === '') {
		throw new Error('You must provide a content');
	}
	todo.created_at = new Date().toISOString();
	todo.updated_at = new Date().toISOString();
	todo.type = 'todos';
	todo._id = 'todos:' + new Date().toISOString();

	const result = await db.post(todo);
	return result;
}
