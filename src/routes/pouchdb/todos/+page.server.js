import pouchDB_class from '$lib/pouchDB_class';
import * as db from '$lib/pouchdb.js';

import { createTodo, getTodos } from '$lib/pouchdb';
import { fail, redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	const todos = await getTodos();
	return {
		todos
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		try {
			createTodo({
				title: data.get('title'),
				content: data.get('content')
			});
			throw redirect(307, '/pouchdb/todos');
		} catch (error) {
			return fail(422, {
				title: data.get('title'),
				content: data.get('content'),
				error: error.message
			});
		}
	},

	delete: async ({ request }) => {
		const data = await request.formData();
		console.log(data);

		// const todo = await
		// try {
		//     db.deleteDoc()

		// } catch (error) {

		// }
	}
};
