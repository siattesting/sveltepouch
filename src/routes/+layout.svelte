<script>
	import { applyAction, enhance } from '$app/forms';
	import { currentUser, pb } from '$lib/pocketbase';
	import '../app.postcss';
	// import '../w3.css';
</script>

<div class="bg-neutral text-neutral-content">
	<div class="max-w-xl mx-auto navbar">
		<div class="navbar-start">
			<a href="/" class="btn btn-ghost text-xl">SvelteKit | PouchDB</a>
		</div>
		<div class="navbar-end">
			<ul class="menu menu-horizontal">
				{#if $currentUser}
					<li><a href="/">{$currentUser.email}</a></li>
					<li>
						<form
							method="POST"
							action="/logout"
							use:enhance={() => {
								return async ({ result }) => {
									pb.authStore.clear();
									await applyAction(result);
								};
							}}
						>
							<button>Log Out</button>
						</form>
					</li>
				{:else}
					<li>
						<a href="/login">Login</a>
					</li>
					<li>
						<a href="/register">Register</a>
					</li>
				{/if}
			</ul>
		</div>
	</div>
</div>
{#if $currentUser}
	<div class="navbar bg-base-100">
		<div class="flex-1">
			<a href="/pb/todos" class="btn btn-ghost normal-case text-xl">daisyUI</a>
		</div>
		<div class="flex-none">
			<ul class="menu menu-horizontal px-1">
				<li><a href="/pb/todos">PB Todos</a></li>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<li tabindex="0">
					<a href="/pb/todos">
						PB Todos
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-base-100">
						<li><a href="/pb/todos">New PB Todo</a></li>
						<li><a href="/pb/todos">My Todos</a></li>
					</ul>
				</li>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<li tabindex="0">
					<a href="/mapdb/posts">
						MapDB Posts
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-base-100">
						<li><a href="/mapdb/posts/new">New MapDB Post</a></li>
						<li><a href="/mapdb/posts">My MapDB posts</a></li>
					</ul>
				</li>
				<!-- svelte-ignore a11y-positive-tabindex -->
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<li tabindex="0">
					<a href="/pouchdb/posts">
						PouchDB Posts
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-base-100">
						<li><a href="/pouchdb/posts/new">New PouchDB Post</a></li>
						<li><a href="/pouchdb/posts">My PouchDB posts</a></li>
					</ul>
				</li>
				<li tabindex="0">
					<a href="/pouchdb/posts_class">
						PouchDB Posts Class
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-base-100">
						<li><a href="/pouchdb/posts_class/new">New Post (class)</a></li>
						<li><a href="/pouchdb/posts_class">My PoucDB posts (class)</a></li>
					</ul>
				</li>
				<li tabindex="0">
					<a href="/pouchdb/todos">
						PouchDB Todos
						<svg
							class="fill-current"
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg
						>
					</a>
					<ul class="p-2 bg-base-100">
						<li><a href="/pouchdb/todos/new">New PouchDB Todo</a></li>
						<li><a href="/pouchdb/todos">My PouchDB todos</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
{/if}
<div class="max-w-xl mx-auto mt-4 py-8 px-4">
	<div class="content"><slot /></div>
</div>
