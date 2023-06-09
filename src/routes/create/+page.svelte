<script lang="ts">
	import type { Post } from '@prisma/client';

	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ posts, user } = data);

	//const { form, errors, constraints, enhance } = superForm(data)
	import { superForm } from 'sveltekit-superforms/client';

	import { InputChip } from '@skeletonlabs/skeleton';

	import type { ActionData } from './$types';
	export let form: ActionData;

	let categories = ['Ходьба', 'Бег', 'Плавание', 'Приседание', 'Жим', 'Велсипед'];
	let selectedCategory: String = '0';
	let unit = '';

	const handleOptions = () => {
		if (selectedCategory === '0') {
			unit = '';
		} else if (selectedCategory === 'Приседание' || selectedCategory === 'Жим') {
			unit = 'кг';
		} else {
			unit = 'км';
		}
	};

	let value: Number = 0;

	let tags: string[] = [];
</script>

<!-- 
<div class="card mt-8 p-8 max-w-md m-auto">
	<h1>
		{user?.id}
	</h1>
	<form action="?/createPost" method="POST" class="space-y-6">
		<label class="label" for="title">
			<span class="block">Title</span>
			<input class="input" type="text" name="title" id="title" />
		</label>

		<label class="label" for="content">
			<span>Content</span>
			<input class="input mt-2" type="text" name="content" id="content" />
		</label>

		<label for="published">
			<span>Published</span>
			<input type="checkbox" name="published" id="published" checked />
		</label>

		<button class="btn variant-filled" type="submit">Submit</button>
	</form>
</div>

<div class="grid">
	<div>
		<h2>Articles:</h2>
		{#each posts as post}
			<article>
				<header>{post.title}</header>
				<p>
					{post.content}
				</p>
			</article>
		{/each}
	</div>
</div>
 -->
<div class="card mt-8 p-8 max-w-full sm:max-w-max m-auto">
	<form method="post">
		<h1>Поделитесь своими достижениями!</h1>
		<label class="label" for="category">Выберите спорт и заполниете измерения</label>
		<div class="input-group input-group-divider grid-cols-[1fr_60px_50px]">
			<select id="category" bind:value={selectedCategory} on:change={handleOptions}>
				<option value="0" disabled>Выберите категорию</option>
				{#each categories as category}
					<option value={category}>{category}</option>
				{/each}
			</select>
			<input id="record" class="input text-right" bind:value min="0" step=".1" type="number" />
			<div>{unit}</div>
		</div>
		<label class="label" for="image">Добавьте скриншот своего достижения</label>
		<input id="image" class="input" title="lakjsdfas" type="file" />

		<label class="label" for="video"
			>Вы можете выложить видео на ютуб и добавить ссылку на видео здесь</label
		>
		<input id="video" class="input" title="lakjsdfas" type="text" />

		<label class="label" for="text">Вы можете поделиться своими мыслями</label>
		<textarea id="text" name="text" class="textarea" rows="2" />

		<label for="tags" class="label">Вы можете отметить тэги</label>
		<InputChip bind:value={tags} name="tags" id="tags" placeholder="" />

		<label for="" />
		<div class="flex justify-between">
			<label for="published" class="flex items-center">
				<input id="published" class="checkbox" type="checkbox" checked />
				<p>Опубликовать</p>
			</label>
			<button type="submit" class="btn variant-filled-primary">Отправить</button>
		</div>
	</form>
</div>

<!--     text      String?
  published Boolean @default(true)
  sport     String
  value     Float
  favorite  Boolean @default(true)

  createdAt DateTime @default(now())
  tags      Tags[]
  media     Media?-->

<style>
	input[type='number']::-webkit-outer-spin-button,
	input[type='number']::-webkit-inner-spin-button,
	input[type='number'] {
		-webkit-appearance: none;
		margin: 0;
		-moz-appearance: textfield !important;
	}
	label:not([for='published']) {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}
</style>
