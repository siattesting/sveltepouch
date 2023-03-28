import { pb } from '$lib/pocketbase';

interface Todo {
	// type the collection fields you want to use...
	id: string;
	title: string;
	content: string;
	completed: boolean;
}

// /** @type {import('./$types').PageServerLoad} */
export async function load() {
	const serializeNonPOJOs = (value: object | null) => {
		return structuredClone(value);
	};
	try {
		const records = await pb.collection('todos').getFullList<Todo>({ sort: '-created' });
		console.log(records);
		return {
			todos: serializeNonPOJOs(records)
		};
	} catch (error) {
		console.log(error);
	}
}
