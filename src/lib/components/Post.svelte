<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	const midVertical = 'https://i.ibb.co/rdVfdmh/IMG-0613.png';
	const midHorizontal = 'https://i.ibb.co/t3ng4j0/alfa.png';

	export let src = midHorizontal;

	const getMeta = (url: string) =>
		new Promise((resolve, reject) => {
			const img: HTMLImageElement = new Image();
			img.onload = () => resolve(img);
			img.onerror = (err) => reject(err);
			img.src = url;
		});
	// image size from url
	onMount(async () => {
		const img = (await getMeta(midHorizontal)) as HTMLImageElement;
		console.dir(img.naturalHeight + ' ' + img.naturalWidth, img.naturalHeight > img.naturalWidth);
		const img2 = (await getMeta(midVertical)) as HTMLImageElement;
		console.dir(
			img2.naturalHeight + ' ' + img2.naturalWidth,
			img2.naturalHeight > img2.naturalWidth
		);
	});
</script>

<div class="w-30 h-96 card card-hover overflow-hidden bg-initial rounded-3xl relative">
	<!-- 	{#if checked} -->
	<img {src} alt="IMG-0613" />
	<!-- 	{:else}
		<img src={midHorizontal} alt="IMG-0613" />
	{/if} -->

	<div class="text-block m-5">
		<h6 class="h6">Announcements</h6>
		<h3 class="h3" data-toc-ignore>Skeleton is Awesome!</h3>
		<article>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aspernatur provident
				eveniet
			</p>
		</article>
	</div>
	<footer class="card-footer">
		<Avatar
			src="https://avatars.mds.yandex.net/i?id=24441465c2f02c98e92293070d4def411247b808-5210406-images-thumbs&n=13"
			width="w-8"
		/>
		<div class="flex-auto flex justify-between items-center">
			<h6 class="font-bold">By Alex</h6>
			<small>On {new Date().toLocaleDateString()}</small>
		</div>
	</footer>
</div>

<style>
	.text-block {
		position: absolute;
		top: 10px;
		left: 10px;
		/* 		bottom: 20px;
        right: 20px; */
		background-color: rgba(0, 0, 0, 0.411);
		color: rgba(255, 255, 255, 0.781);
		padding-left: 20px;
		padding-right: 20px;
	}
	img {
		height: inherit;
		width: inherit;
		object-fit: contain;
	}
</style>
