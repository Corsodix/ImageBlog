<script lang="ts">
	import SuperDebug from 'sveltekit-superforms/client/SuperDebug.svelte';

	const divisions = [
		'01. див. Дальний Восток',
		'02. див. Восточная Сибирь',
		'03. див. Западная Сибирь',
		'04. див. Урал',
		'05. див. Юг',
		'06. див. Средняя Волга',
		'07. див. Верхняя Волга',
		'08. див. Центральный',
		'09. див. Черноземье',
		'10. див. Приволжский',
		'11. див. Северо-Западный'
	];
	let selectedDidivision: String = '0';

	let files: FileList;
	let imageSrc: string;
	const handleChange = async () => {
		let file: File = files[0];
		imageFileToString(file).then((r) => (imageSrc = r));
	};

	import type { PageData } from './$types';
	import { superForm } from 'sveltekit-superforms/client';
	import { FileButton } from '@skeletonlabs/skeleton';
	import { imageFileToString } from '$lib/utils';

	export let data: PageData;

	// Client API:
	const { form, errors, constraints, enhance } = superForm(data.form);
</script>

<SuperDebug data={$form} />

<div class="p-0 mx-auto sm:max-w-xl md:max-w-2xl">
	<header class="text-center py-4">
		<div class="text-center mb-2 text-3xl font-bold">Добро пожаловать!</div>
		<p class="unstyled text-sm md:text-base opacity-50">Укажите свои данные для регистрации</p>
	</header>
	<div class="card variant-ghost-surface p-6 space-y-6 shadow-xl text-left mb-10">
		<form method="POST" class="space-y-4" use:enhance>
			<label for="email" class="label">
				<span>Почта<span class="text-red-500">*</span></span>
				<input
					type="email"
					class="input"
					id="email"
					name="email"
					bind:value={$form.email}
					class:input-error={$errors.email}
					data-invalid={$errors.email}
					{...$constraints.email}
				/>
			</label>
			<label for="password" class="label">
				<span>Пароль<span class="text-red-500">*</span></span>
				<input
					type="password"
					class="input"
					id="password"
					name="password"
					bind:value={$form.password}
					class:input-error={$errors.password}
					data-invalid={$errors.password}
					{...$constraints.password}
				/>
			</label>
			<label for="name" class="label">
				<span>Имя<span class="text-red-500">*</span></span>
				<input
					type="text"
					class="input"
					id="name"
					name="name"
					bind:value={$form.name}
					class:input-error={$errors.name}
					data-invalid={$errors.name}
					{...$constraints.name}
				/>
			</label>
			<label for="surname" class="label">
				<span>Фамилия<span class="text-red-500">*</span></span>
				<input
					type="text"
					class="input"
					id="surname"
					name="surname"
					bind:value={$form.surname}
					class:input-error={$errors.surname}
					data-invalid={$errors.surname}
					{...$constraints.surname}
				/>
			</label>
			<label for="division" class="label">
				<span>Дивизион<span class="text-red-500">*</span></span>
				<select
					class="select variant-form-material"
					name="division"
					id="didvision"
					bind:value={$form.division}
					class:input-error={$errors.division}
					data-invalid={$errors.division}
					{...$constraints.division}
				>
					<option value="0" disabled />
					{#each divisions as division}
						<option value={division}>{division}</option>
					{/each}
				</select></label
			>
			<label for="firm" class="label">
				<span>Филиал</span>
				<input type="text" class="input" id="firm" name="firm" bind:value={$form.firm} />
			</label>
			<label for="about" class="label">
				<span>О себе</span>
				<input type="text" class="input" id="about" name="about" bind:value={$form.about} />
			</label>
			<label for="img" class="label">
				<span>Аватар</span>
				<div class="flex flex-col items-center">
					{#if imageSrc}
						<div>
							<h2>Предпросмотр</h2>
						</div>
						<div>
							<img src={imageSrc} alt="test" width="300" height="234" class="my-3" />
						</div>
					{/if}
					<div>
						<FileButton
							name="files"
							button="variant-soft-primary"
							on:change={handleChange}
							bind:files
							accept=".jpg, .jpeg, .png"
						>
							Выбрать фото</FileButton
						>
					</div>
				</div>
				<!-- <input type="file" class="input" id="img" name="img" bind:value={$form.img} /> -->
			</label>
			<div class="flex justify-between">
				<span><span class="text-red-500">*</span> Обязательно</span>
				<button type="submit" class="btn variant-filled-secondary">Отправить</button>
			</div>
		</form>
	</div>
</div>
