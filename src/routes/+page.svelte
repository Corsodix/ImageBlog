<script>

	import Card from "$lib/components/Card.svelte";
	import New from "$lib/components/New.svelte";
	import Post from "$lib/components/Post.svelte";

	const midVertical = 'https://i.ibb.co/rdVfdmh/IMG-0613.png';
	const midHorizontal = 'https://i.ibb.co/t3ng4j0/alfa.png';


</script>


<div class="container h-full mx-auto grid grid-cols-1 
sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 mt-10 gap-10 justify-center items-center">
<Post src={midHorizontal}/>
<Post src={midVertical}/>
	{#each {length: 2} as item}
		<Card />	
	{/each}

<New />
</div>
