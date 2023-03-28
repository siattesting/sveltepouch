import { error } from '@sveltejs/kit';
import Post from '$lib/pouchDB_class.js';
export const load: PageLoad = async ({ params }) => {
	try {
		const post = await Post.getPost(params.id);
		if (!post) {
			throw error(404, 'Post Not found');
		}

		if (post) {
			return { post };
		}
	} catch (error) {
		console.log(error);
	}
};
