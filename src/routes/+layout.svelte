<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';
	import {
		AppBar,
		AppShell,
		Avatar,
		LightSwitch,
		type DrawerSettings,
		drawerStore,
		Drawer
	} from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';

	import type { LayoutData } from './$types';
	export let data: LayoutData;
	const { user } = data;

	const buttonCl = 'btn variant-ghost-surface rounded-2xl font-bold';

	let initials = '';
	//if (user && typeof user.name === 'string' && typeof user.surname === 'string') {
	if (data.user && data.user.name.length > 1 && data.user.surname.length > 1 ) {
		initials = data.user.name.at(0).toUpperCase() + data.user.surname.at(0).toUpperCase();
	}

	function redir(): void {
		drawerStore.close();
		goto('/profile');
	}

	function trigger(position: 'left' | 'right'): void {
		if (position === 'right') {
			const s: DrawerSettings = {
				id: 'profile',
				position,
				blur: 'backdrop-blur-xs',
				padding: 'p-4',
				rounded: 'rounded-xl',
				width: 'w-max',
				height: 'h-max'
			};
			drawerStore.open(s);
		}
		if (position === 'left') {
			const s: DrawerSettings = {
				id: 'main',
				position,
				blur: 'backdrop-blur-xs',
				padding: 'p-4',
				rounded: 'rounded-xl',
				width: 'w-max',
				height: 'h-max'
			};
			drawerStore.open(s);
		}
	}
</script>

<Drawer>
	{#if $drawerStore.id === 'profile'}
		<div class="flex flex-col items-end gap-4 m-5">
			<div>
				<LightSwitch />
			</div>
			<Avatar
				{initials}
				background="border-4 border-surface-300-600-token hover:!border-primary-500"
				cursor="cursor-pointer"
				on:click={redir}
			/>
			<!-- <a class={buttonCl} href="/profile" on:click={() => drawerStore.close()}>Profile</a> -->
			<!-- 			<a class={buttonCl} href="/register" on:click={() => drawerStore.close()}>Register</a>
			<a class={buttonCl} href="/login" on:click={() => drawerStore.close()}>Войти</a> -->
			<a class={buttonCl} href="/create" on:click={() => drawerStore.close()}>Create</a>
			<form method="POST">
				<button
					class={buttonCl}
					type="submit"
					formaction="/logout"
					on:click={() => drawerStore.close()}>Выйти</button
				>
			</form>
		</div>
	{:else if $drawerStore.id === 'main'}
		<div class="flex flex-col items-end gap-4 m-5">
			<a class={buttonCl} href="/" on:click={() => drawerStore.close()}>На Главную</a>
			<a class={buttonCl} href="/twcats2" on:click={() => drawerStore.close()}>TWCats2</a>
		</div>
	{:else}
		<div>error</div>
	{/if}
</Drawer>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			class="shadow-xl"
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<button on:click={() => trigger('left')}>
					<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">
						<path
							d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
						/>
					</svg>
				</button>
			</svelte:fragment>
			<h1>ЗАГОЛОВОК</h1>
			<svelte:fragment slot="trail">
				{#if data.session}
					<Avatar
						{initials}
						background="border-4 border-surface-300-600-token hover:!border-primary-500"
						cursor="cursor-pointer"
						width="w-14"
						on:click={() => trigger('right')}
					/>
				{:else}
					<a class={buttonCl} href="/login" on:click={() => drawerStore.close()}>Войти</a>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
</AppShell>
