<script>
	/**
	 * @type {{ todos: any; }}
	 */
	export let data;
</script>

<h1>Posts from MapDB</h1>

<form method="POST" action="?/create">
	<label for="title">
		Title:
		<input name="title" />
	</label>
	<label for="content">
		Content:
		<input name="content" />
	</label>
	<button type="submit">Save</button>
</form>

<ul>
	{#each data.todos as todo (todo.id)}
		<li class="post">
			{todo.title}
			- {todo.content}
		</li>
	{/each}
</ul>
