<script>
	import { addPet } from '$lib/generated/generatedComponents';

	let name = '';
	let tag = '';
	let error = '';
	let message = '';

	const add = async () => {
		await addPet({ body: { name: name, tag: tag } })
			.then((pet) => {
				name = '';
				tag = '';
				error = '';
				message = pet.name;
			})
			.catch((e) => {
				message = '';
				error = e.stack.message;
			});
	};
</script>

<fieldset>
	<legend>Add new Pet</legend>
	<label for="name">Name:</label>
	<input type="text" name="name" bind:value={name} />
	<label for="tag">Tag:</label>
	<input type="text" name="tag" bind:value={tag} />
	<button on:click={add}>Add pet</button>
	{#if error}
		<span class="error">{error}</span>
	{/if}
	{#if message}
		<span class="message">Added new pet: {message}</span>
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
