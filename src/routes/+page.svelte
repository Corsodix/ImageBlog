<script>

	import Card from "$lib/components/Card.svelte";

</script>

<div class="container h-full mx-auto grid grid-cols-1 
sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 mt-10 gap-10 justify-center items-center">
	{#each {length: 9} as item}
		<Card />	
	{/each}

</div>
