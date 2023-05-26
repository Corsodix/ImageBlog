<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;


	const b = [1,2,3,4,5,6,7,8,9,10]
	const w = '100px'
</script>


<header class="flex p-5 gap-5 w-full bg-[pink] rounded-2xl justify-end mb-3">
	<div class="link">
		Home
	</div>
	<div class="link">
		Next
	</div>
	<div class="link">
		Settings
	</div>
	<div class="link">
		Profile
	</div>
</header>

<div class="gap-6 bg-[pink] rounded-2xl p-6 grid grid-cols-2 
    sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
	{#each b as bx}
	<div class="bg-[tomato] rounded-2xl" id="bx" style="width:{w};height: {w}">
	</div>
	{/each}
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