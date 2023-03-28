<script>
	/**
	 * @type {{ posts: any; }}
	 */
	export let data;
</script>

<div>
	{#each data.posts as post (post._id)}
		<div>
			<h2>{post.title}</h2>
			<p>{post.content}</p>
			<small>{post._id}</small>
			<button><a href={`/pouchdb/posts_class/${post._id}`}>View</a></button>
		</div>
	{/each}
</div>
