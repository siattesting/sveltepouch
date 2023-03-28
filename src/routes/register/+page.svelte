<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { pb } from '$lib/pocketbase';
</script>

<form
	method="POST"
	class="card"
	use:enhance={() => {
		return async ({ result }) => {
			pb.authStore.loadFromCookie(document.cookie);
			await applyAction(result);
		};
	}}
>
	<h1 class="text-2-xl mb-8">Register</h1>
	<div class="form-control gap-2 mb-4">
		<input
			type="email"
			name="email"
			id="email"
			placeholder="Email..."
			class="input input-bordered"
		/>
		<input
			type="password"
			name="password"
			id="password"
			placeholder="Password"
			class="input input-bordered"
		/>
		<input
			type="password"
			name="passwordConfirm"
			id="passwordConfirm"
			placeholder="Confirm password"
			class="input input-bordered"
		/>
		<button class="btn btn-primary">Register</button>
	</div>
</form>
