<script lang="ts">
	import New from '$lib/components/New.svelte';

    import type { PageData } from './$types';
    
    export let data: PageData;

	function test() {
		const width = Math.round(Math.random() * (600 - 200) + 200);
		const height = Math.round(Math.random() * (600 - 200) + 200);
		const imgsrc = `https://placekitten.com/${width}/${height}`;
		const ratio = width / height;
		const outImg = {
			imgsrc,
			width,
			height,
			ratio
		};
		return outImg;
	}




	const midVertical = 'https://i.ibb.co/rdVfdmh/IMG-0613.png';
	const midHorizontal = 'https://i.ibb.co/t3ng4j0/alfa.png';


	/* const postData: PostData = {
		id: 1,
		date: new Date(),
		title: 'title',
		published: true,
		userId: 'text',
		sport: 'Бег',
		value: 10,
		favorite: true,
		img: {
			thumb: 'https://i.ibb.co/7kqNkXD/IMG-0613.png',
			medium: 'https://i.ibb.co/rdVfdmh/IMG-0613.png',
			url: 'https://i.ibb.co/g4xF438/IMG-0613.png',
			title: 'IMG-0613',
			height: 2436,
			width: 1125,
			ratio: 0.46182266009
		}
	}; */


</script>



<div class="container h-full mx-auto grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-flow-row-dense mt-10 gap-10 justify-center items-center">
	{#each data.data as post, index}
		<New postData={post} />
	{/each}
</div>


<!-- <div class="container h-full mx-auto grid grid-cols-1 md:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] grid-flow-row-dense mt-10 gap-10 justify-center items-center">
	{#each { length: 50 } as item, index}
		<New src={test().imgsrc} ratio={test().ratio} />
	{/each}
</div> -->
