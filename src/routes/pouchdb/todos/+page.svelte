<script>
	import { enhance } from '$app/forms';
	export let data;
	export let form;
	let adding = false;
</script>

<div>
	{#if form?.error}
		<p>{form.error}</p>
	{/if}
	{#if data.todos.length < 1}
		<p>Not todos to display</p>
	{/if}
	<button class="button text-3xl text-blue-500" on:click={() => (adding = true)}>Add todo</button>
	{#each data.todos as todo (todo._id)}
		<div>
			<h2>{todo.title}</h2>
			<p>{todo.content}</p>
			<small>{todo._id}</small>
			<div>
				<form action="?/delete">
					<div>
						<input type="hidden" value={todo._id} />
						<button type="submit">delete</button>
					</div>
				</form>
			</div>
		</div>
	{/each}
</div>

<hr />
{#if adding}
	<div>
		<h1>Create Todos</h1>
		<div>
			<form method="post" action="?/create" use:enhance>
				<div>
					<label for="title">Title</label>
					<input type="text" name="title" id="title" />
				</div>
				<div>
					<label for="content">Title</label>
					<textarea name="content" id="content" />
				</div>
				<div>
					<button type="submit">Save</button>
				</div>
			</form>
		</div>
	</div>
{/if}
