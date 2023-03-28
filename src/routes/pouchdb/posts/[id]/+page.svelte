<script>
	/**
	 * @type {import('./$types').PageData}
	 */
	export let data;
</script>

<div>
	<h1>{data.post.title}</h1>
	<p>{@html data.post.content}</p>
	<small>{data.post._id}</small>
	<button><a href="/pouchdb/posts/{data.post._id}/edit">Edit</a></button>
</div>

<div>
	<form />
</div>
