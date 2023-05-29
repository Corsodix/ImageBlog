<script lang="ts">
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppBar, AppShell, Avatar, LightSwitch } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';
	import { goto } from '$app/navigation';
	import { redirect } from '@sveltejs/kit';

	let initials = 'Login';

	if (data.user !== null) {
		initials = data.user.name.at(0).toUpperCase() + data.user.surname.at(0).toUpperCase();
	}

function redir () {
	
	 goto('/profile') 
}

	/* function login() {
	initials = 'ДС'
}

function redir() {
	if(data.val===1){
		goto('/login')
	}
	if(data.val===2){
		goto('/register')
	}
	
} */
</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="shadow-xl">
			<svelte:fragment slot="lead">
				<a href="/" class="text-xl uppercase font-bold">🚴 SPORT</a>
			</svelte:fragment>
			<div class="flex gap-5 justify-center">
				<a class="btn variant-ghost-surface rounded-2xl font-bold" href="/">Home</a>
				<a class="btn variant-ghost-surface rounded-2xl font-bold" href="/test">Test</a>
				<!-- 				{#if data.val == 1}
				
				<a class="btn  variant-ghost-surface rounded-2xl font-bold" href="/register">Register</a>
				{:else}
				<a class="btn  variant-ghost-surface rounded-2xl font-bold" href="/login">Login</a>
				{/if} -->
			</div>
			<svelte:fragment slot="trail">
				{#if !data.user}
					<a class="btn variant-ghost-surface rounded-2xl font-bold" href="/login">Войти</a>
				{:else}
					<form method="POST">
						<button
							class="btn variant-ghost-surface rounded-2xl font-bold"
							type="submit"
							formaction="/logout">Выйти</button
						>
					</form>
					<Avatar
						{initials}
						background="border-4 border-surface-300-600-token hover:!border-primary-500"
						cursor="cursor-pointer"
						on:click={redir}
					/>
				{/if}
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
</AppShell>
