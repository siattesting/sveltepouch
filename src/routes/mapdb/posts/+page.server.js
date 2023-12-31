import { fail } from '@sveltejs/kit';
import * as db from '$lib/mapDB.js';

export function load({ cookies }) {
	const id = cookies.get('userid');

	if (!id) {
		cookies.set('userid', crypto.randomUUID(), { path: '/' });
	}

	return {
		todos: db.getTodos(id) ?? []
	};
}

export const actions = {
	create: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			db.createTodo(cookies.get('userid'), data.get('title'), data.get('content'));
		} catch (error) {
			return fail(422, {
				title: data.get('title'),
				content: data.get('content'),
				error: error.message
			});
		}
	},
	delete: async ({ cookies, request }) => {
		const data = await request.formData();
		db.deleteTodo(cookies.get('userId'), data.get('id'));
	}
};
