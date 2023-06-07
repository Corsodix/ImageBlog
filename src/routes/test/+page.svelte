<script lang="ts">
	/*     import type { PageData } from './$types';
    
    export let data: PageData; */

	const embed = 'https://www.youtube.com/embed/';

	const t = 'https://youtu.be/yRuWDPPM3gE';

	const e = `<iframe width="1903" height="768" src="https://www.youtube.com/embed/yRuWDPPM3gE" title="Раскапываем System Shock" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
	const videoSrc: string | null = null;
	/* .match('v=([a-zA-Z0-9_-]+)&?')[1] */
	/* 	const testsrc = "https://www.youtube.com/watch?v=yRuWDPPM3gE&ab_channel=StopGame"

	const str = testsrc.split('?v=')[1].split('&')[0]


	videoSrc = embed + str


	console.log(str) */

	const cIframe = 'bg-black w-full aspect-video rounded-container-token overflow-hidden';
	const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const w = '100px';

	function test() {
		const width = Math.round(Math.random() * (600 - 200) + 200);
		const height = Math.round(Math.random() * (600 - 200) + 200);
		const imgsrc = `https://placekitten.com/${width}/${height}`;
		const ratio = width < height ? 'col-span-2' : 'col-span-1';
		const outImg = {
			imgsrc,
			width,
			height,
			ratio
		};
		return outImg;
	}
</script>

<header class="flex p-5 gap-5 w-full bg-[pink] rounded-2xl justify-end mb-3">
	<div class="link">Home</div>
	<div class="link">Next</div>
	<div class="link">Settings</div>
	<div class="link">Profile</div>
</header>

<div
	class="gap-6 bg-[pink] rounded-2xl p-6 grid grid-cols-2
    sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7"
>
	{#each b as bx}
		<div class="bg-[tomato] rounded-2xl" id="bx" style="width:{w};height: {w}" />
	{/each}
</div>

<div class="grid grid-cols-3 gap-x-2 gap-y-3 grid-flow-row-dense">
	<div class="bg-red-500 rounded-lg shadow-xl min-h-[50px]" />
	<div class="bg-orange-500 rounded-lg shadow-xl min-h-[50px] col-span-3" />
	<div class="bg-yellow-500 rounded-lg shadow-xl min-h-[50px] row-span-2" />
	<div class="bg-green-500 rounded-lg shadow-xl min-h-[50px]" />
	<div class="bg-teal-500 rounded-lg shadow-xl min-h-[50px]" />
	<div class="bg-blue-500 rounded-lg shadow-xl min-h-[50px]" />
	<div class="bg-indigo-500 rounded-lg shadow-xl min-h-[50px]" />
	<div class="bg-purple-500 rounded-lg shadow-xl min-h-[50px]" />
	<div class="bg-pink-500 rounded-lg shadow-xl min-h-[50px]" />
	<div class="bg-slate-500 rounded-lg shadow-xl min-h-[50px]" />
</div>

<div class="card flex justify-center gap-9">
	<iframe
		class="bg-black w-1/3 aspect-video rounded-container-token overflow-hidden"
		src="https://www.youtube.com/embed/vOGhAV-84iI"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	/>
	{#if videoSrc}
		<iframe
			class="bg-black w-1/3 aspect-video rounded-container-token overflow-hidden"
			src={videoSrc}
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		/>
	{/if}
</div>

<style>
	.link {
		@apply bg-[tomato] rounded-2xl px-5 py-3;
	}

	/* 	header {
		display: flex;
		padding: 25px;
		justify-content: right;
		gap: 20px;
		width: full;
		background-color: pink;
		margin-bottom: 10px;
		border-radius: 15px;
	} */
	/* 	.link {
		background-color: tomato;
		border-radius: 15px;
		padding: 10px 20px;
	} */

	/* 	.container {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		justify-content: center;
		justify-items: center;
	} */
</style>
