<script lang="ts">
	import { findPets } from '$lib/generated/generatedComponents';
	import type { Pet } from '$lib/generated/generatedSchemas';

	let pets: Pet[] = [];

	const load = async () => {
		pets = await findPets({});
		console.log('logx', pets);
	};
</script>

<button on:click={load}>Load all pets</button>
<div class="pets">
	{#each pets as pet}
		<div class="pet">
			<span>Id: {pet.id}</span>
			<span>Name: {pet.name}</span>
			<span>Tag: {pet.tag}</span>
		</div>
	{/each}
</div>

<style>
	.pets {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.pet {
		display: flex;
		flex-direction: column;
		gap: 10px;
		border: 1px solid black;
		padding: 10px;
	}
</style>
