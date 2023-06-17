<script lang="ts">
	import AddPet from '$lib/components/addPet.svelte';
	import DeletePet from '$lib/components/deletePet.svelte';
	import LoadPets from '$lib/components/loadPets.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="content">
	<LoadPets />
	<AddPet />
	<DeletePet />
</div>

<style>
	.content {
		max-width: 300px;
		margin: 50px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		justify-content: center;
		align-items: center;
	}
</style>
