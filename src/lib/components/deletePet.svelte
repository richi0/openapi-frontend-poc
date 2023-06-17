<script lang="ts">
	import { deletePet } from '$lib/generated/generatedComponents';

	let ID: number | null = null;
	let error = '';
	let message = '';

	const removePet = async () => {
		if (!ID) {
			error = 'Invalid input for ID';
			message = '';
			return;
		}
		await deletePet({ pathParams: { id: ID } })
			.then(() => {
				message = `Removed pet ${ID}`;
				ID = null;
				error = '';
			})
			.catch((e) => {
				error = e.stack.message;
			});
	};
</script>

<fieldset>
	<legend>Delete Pet</legend>
	<label for="id">ID:</label>
	<input type="text" name="id" bind:value={ID} />
	<button on:click={removePet}>Delete Pet</button>
	{#if error}
		<span class="error">{error}</span>
	{/if}
	{#if message}
		<span class="message">{message}</span>
	{/if}
</fieldset>

<style>
	fieldset {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.error {
		color: red;
	}
	.message {
		color: green;
	}
</style>
