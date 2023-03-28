<script>
	/**
	 * @type {import('./$types').PageData}
	 */
	export let data;
</script>

<div>
	<h1>Post from class method</h1>
	<h4>{data.post.title}</h4>
	<p>{@html data.post.content}</p>
	<small>{data.post._id}</small>
</div>
