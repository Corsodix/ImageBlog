<script lang="ts">
	import type { PostData } from '$lib/types';
	import type { Post } from '@prisma/client';

	import type { Prisma } from '@prisma/client';


	let x: Prisma.AuthUserInclude
	let y: Prisma.AuthUser$PostArgs

	let z: Prisma.PostSelect

	const midVertical = 'https://i.ibb.co/rdVfdmh/IMG-0613.png';
	const midHorizontal = 'https://i.ibb.co/t3ng4j0/alfa.png';

	// props
	/* 	export let src: string; //= midHorizontal;
	export let ratio: number; // = 1; */
	//export let postData: Prisma.PostSelect

	export let postData: Prisma.PostSelect = {
		id: 1,
		published: true,
		userId: 'Имя Участника',
		sport: 'Бег',
		value: 10,
		favorite: true,
		img_thumb: 'https://i.ibb.co/7kqNkXD/IMG-0613.png',
		img_medium: 'https://i.ibb.co/rdVfdmh/IMG-0613.png',
		img_url: 'https://i.ibb.co/g4xF438/IMG-0613.png',
		img_title: 'IMG-0613',
		img_height: 2436,
		img_width: 1125,
		img_ratio: 0.46182266009,
		createdAt: new Date(),
	}; 

	let alt = 'alt';

	// styles
	let cardCl = 'card card-hover  flex relative variant-filled-surface rounded-2xl ';
	const imgCl = 'object-cover object-center w-full h-full rounded-2xl';
	let contentCl = 'absolute overflow-hidden variant-glass-surface rounded-2xl ';

	let test = 0;

	if (postData.img_ratio > 2) {
		cardCl = cardCl + 'md:col-span-2 aspect-[2.13333/1]';
		alt = postData.img_title;
		contentCl = contentCl + 'p-4 right-6 inset-y-6';
		test = 2;
	} else if (postData.img_ratio < 0.5) {
		cardCl = cardCl + 'md:row-span-2 aspect-[1/2.17]';
		alt = postData.img_title;
		contentCl = contentCl + 'p-4 inset-x-6 bottom-6';
		test = 0.5;
	} else {
		cardCl = cardCl + 'aspect-square';
		alt = postData.img_title;
		contentCl = contentCl + 'p-4 bottom-6 right-6';
		test = 1;
	}

	/*   id        Int      @id @default(autoincrement())
	title     String
	content   String?
	published Boolean  @default(false)
	// sport, values, imgbb(thumb, medium, url, title)
	auth_user AuthUser @relation(fields: [userId], references: [id])
	userId    String */

	//<a href="https://ibb.co/7kqNkXD"><img src="https://i.ibb.co/7kqNkXD/IMG-0613.png" alt="IMG-0613" border="0"></a> mini
	//<a href="https://ibb.co/7kqNkXD"><img src="https://i.ibb.co/rdVfdmh/IMG-0613.png" alt="IMG-0613" border="0"></a> midi
	//<img src="https://i.ibb.co/g4xF438/IMG-0613.png" alt="IMG-0613" border="0"> url
	// width: 1125px; height: 2436px; size
	// 0.46182266009
</script>

<div id={String(postData.id)} class={cardCl}>
	<img class={imgCl} src={postData.img_medium} {alt} loading="lazy" />
	<div class={contentCl}>
		<p>{postData.userId}</p>
		<p>{postData.sport} : {postData.value} км</p>
		<p>{postData.createdAt.toLocaleDateString('ru-RU')}</p>
	</div>
</div>

<!-- {#if ratio > 2}
	<div id={String(postData.id)} class={cardCl + 'md:col-span-2 aspect-[2.13333/1]'}>
		<img class={imgCl} {src} {alt} loading="lazy" />
		<div class={contentCl + 'p-4 right-6 inset-y-6'}>
			<p>2 {ratio}</p>
		</div>
	</div>
{:else if ratio < 0.5}
	<div class={cardCl + 'md:row-span-2 aspect-[1/2.17]'}>
		<img class={imgCl} {src} {alt} loading="lazy" />
		<div class={contentCl + 'p-4 inset-x-6 bottom-6'}>
			<p>0.5 {ratio}</p>
		</div>
	</div>
{:else}
	<div class={cardCl + 'aspect-square'}>
		<img class={imgCl} {src} {alt} loading="lazy" />
		<div class={contentCl + 'p-4 bottom-6 right-6'}>
			<p>1 {ratio}</p>
		</div>
	</div>
{/if} -->
