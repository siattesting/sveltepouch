<script>
	import { fly, slide } from 'svelte/transition';
	/**
	 * @type {{ posts: string | any[]; summaries: any; }}
	 */
	export let data;
</script>

<section>
	<h1>PouchDB Posts</h1>
	<form method="POST" action="/pouchdb/posts?/create">
		<label for="title">Title</label>
		<input name="title" placeholder="Title" />
		<label for="content">Content</label>
		<input name="content" placeholder="Content" />
		<button>Save</button>
	</form>
</section>

<div>
	{#if data.summaries.length === 0}
		<p>No items to display</p>
	{:else}
		<ul>
			{#each data.summaries as post (post.id)}
				<li in:fly={{ y: 20 }} out:slide>
					<div>
						<a href="/pouchdb/posts/{post.id}">{post.id} - {post.title}</a>
					</div>
				</li>
			{/each}
		</ul>
	{/if}
</div>
