<script>
	/** @type {import('./$types').PageServerData} */
	export let data;
</script>

<div>
	<h2>Todos form PB</h2>
	<div class="overflow-x-auto w-full">
		<table class="table w-full">
			<!-- head -->
			<thead>
				<tr>
					<th />
					<th>Title</th>
					<th>Content</th>
					<th>Favorite Color</th>
				</tr>
			</thead>
			<tbody>
				<!-- row 1 -->
				{#each data.todos as todo}
					<tr>
						<th><a href="/todos/{todo.id}">{todo.id}</a></th>
						<td>{todo.title}</td>
						<td>{todo.content}</td>
						<td>{todo.completed}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<!-- <div>
		<ul>
			{#each data.todos as todo}
				<li>
					<div class="card">
						<h3><a href="/todos/{todo.id}">{todo.title}</a></h3>
						<p>{todo.content}</p>
						<small>{todo.id}</small>
						<hr />
					</div>
				</li>
			{/each}
		</ul>
	</div> -->
</div>
