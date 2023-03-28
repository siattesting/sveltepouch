<script>
	import { enhance } from '$app/forms';
	/**
	 * @type {{ error: any; title: any; content: any; }}
	 */
	export let data;
	export let form;
</script>

<div>
	{#if form?.error}
		<p>{form.error}</p>
	{/if}
	<form method="POST" action="/pouchdb/posts?/update" use:enhance>
		<div>
			<label for="title">Title</label>
			<input type="text" name="title" placeholder="Title..." value={form?.title ?? ''} required />
		</div>
		<div>
			<label for="content">Content</label>
			<input
				type="text"
				name="content"
				placeholder="Content..."
				value={form?.content ?? ''}
				required
			/>
		</div>
		<div>
			<button type="submit">Save</button>
		</div>
	</form>
</div>
