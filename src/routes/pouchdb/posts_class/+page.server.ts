// import * as dbService from '$lib/pouchDB_class.js'
import { fail, redirect, type Actions } from '@sveltejs/kit';
import Post from '$lib/pouchDB_class.js';

/** @type {import('./$types').PageLoad} */
export async function load() {
	let posts = [];
	posts = await Post.getAllPosts();
	return {
		posts
	};
}
export const actions: Actions = {
	create: async ({ request }) => {
		const data = await request.formData();
		try {
			Post.create({
				title: data.get('title'),
				content: data.get('content')
			});
			throw redirect(307, '../posts');
		} catch (error) {
			return fail(422, {
				title: data.get('title'),
				content: data.get('content'),
				error: error.message
			});
		}
	}
};
