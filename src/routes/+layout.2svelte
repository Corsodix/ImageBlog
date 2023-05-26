<script lang="ts">
/* 	import type { LayoutData } from './$types';
	export let data: LayoutData; */
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import NavBar from '$lib/components/NavBar.svelte';

</script>


<div class="md:container mx-auto px-auto pt-10">

	<AppShell>
		<svelte:fragment slot="header">
			<AppBar>
				<svelte:fragment slot="lead">
					<i >🐱‍🏍 DNS Соревнование</i>
				</svelte:fragment>
				<nav>
					<ul class="flex justify-center font-bold">
						<li><a href="/" class="block py-2 pl-3 pr-4 rounded">Home</a></li>
						<li><a href="/" class="block py-2 pl-3 pr-4 rounded">About</a></li>
						<li><a href="/" class="block py-2 pl-3 pr-4 rounded">Services</a></li>
						<li><a href="/login" class="block py-2 pl-3 pr-4 rounded">Login</a></li>
						<li><a href="/register" class="block py-2 pl-3 pr-4 rounded">Register</a></li>
					</ul>
				</nav>
				<svelte:fragment slot="trail">
					<LightSwitch />
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<!-- (sidebarLeft) -->
		<!-- (sidebarRight) -->
		<!-- (pageHeader) -->
		<!-- Router Slot -->
		<slot />
		<!-- ---- / ---- -->
		<!-- (pageFooter) -->
		<!-- (footer) -->
	</AppShell>
</div>


