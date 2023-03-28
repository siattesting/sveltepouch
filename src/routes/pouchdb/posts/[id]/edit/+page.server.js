import { error } from '@sveltejs/kit';
import * as DB from '$lib/pouchdb.js';

export async function load({ params }) {
	const posts = await DB.listPosts();
	console.table(posts);
	const post = posts.find((post) => post._id === params.id);

	if (!post) {
		throw error(404, 'Post Not found');
	}
	if (post) {
		return { post };
	}
}
