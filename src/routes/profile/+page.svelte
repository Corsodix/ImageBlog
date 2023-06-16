<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

    let {user}= data.user



</script>

{#if user}
	<div class="card p-10 m-auto max-w-sm mt-10">
		<h4>{user.name}</h4>
		<h4>{user.surname}</h4>
		<h4>{user.division}</h4>
		<h4>{user.email}</h4>
        <input type="text" class="input" class:input-error={true}>
	</div>
{:else}
	<h1>NO USER</h1>
{/if}
