<script lang="ts">
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

	const midVertical = 'https://i.ibb.co/rdVfdmh/IMG-0613.png';
	const midHorizontal = 'https://i.ibb.co/t3ng4j0/alfa.png';
</script>

<div class="gap-8 space-y-8 columns-xs p-14">

	{#each { length: 10 } as item, index}
		<!-- <div class="relative aspect-w-16 aspect-h-9"> -->
		<div class="relative aspect-[4/3]">
			{#if index == 3}
				<div class="placeholder bg-contain h-96 w-full object-cover rounded-2xl" />
			{:else if index == 5}
				<img src={midVertical} class="w-full object-cover rounded-2xl" alt="asd" />
			{:else if index == 7}
				<img src={midHorizontal} class="w-full object-cover rounded-2xl" alt="asd" />
			{:else}
				<img src={test().imgsrc} class="w-full object-cover rounded-2xl" alt="asda" />
			{/if}
			<div
				class="absolute inset-8 overflow-hidden bg-stone-700/40 text-stone-50/90 w-4/5 rounded-2xl p-2"
			>
				<h1>TITLE</h1>
				<h5>{test().width} {test().height}</h5>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consectetur reprehenderit,
					veniam atque cum adipisci. Totam minima corporis atque nobis consequatur nisi quisquam.
					Delectus tempore neque accusantium magni quia soluta.
				</p>
			</div>
		</div>
	{/each}
	<div class="relative">
		<img src={midHorizontal} class="w-full object-cover rounded-2xl" alt="asd" />
		<div
			class="absolute inset-8 overflow-hidden bg-stone-700/40 text-stone-50/90 w-4/5 rounded-2xl p-2"
		>
			<h1>TITLE</h1>
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consectetur reprehenderit,
				veniam atque cum adipisci. Totam minima corporis atque nobis consequatur nisi quisquam.
				Delectus tempore neque accusantium magni quia soluta.
			</p>
		</div>
	</div>
</div>

<style>
	.placeholder {
		width: 300;
		height: 300;
		background-repeat: no-repeat;
		background-size: contain;
		/* background-image: url('my_placeholder.png'); */
	}
</style>
