<script lang="ts">
	function test() {
		const width = Math.round(Math.random() * (600 - 200) + 200);
		const height = Math.round(Math.random() * (600 - 200) + 200);
		const imgsrc = `https://placekitten.com/${width}/${height}`;
		return imgsrc;
	}
</script>

<div class="gap-8 space-y-8 columns-xs p-14">
	{#each { length: 10 } as item, index}
        <div class="relative aspect-w-16 aspect-h-9">
            {#if index==5}
                <div class="placeholder bg-contain h-96 w-full object-cover rounded-2xl" />
            {:else}

                 <img src={test()} class="w-full object-cover rounded-2xl" alt={index} />
            {/if}
            <div class="absolute inset-8 overflow-hidden bg-stone-700/40 text-stone-50/90 w-4/5 rounded-2xl p-2">
                <h1>TITLE</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa consectetur reprehenderit, veniam atque cum adipisci. Totam minima corporis atque nobis consequatur nisi quisquam. Delectus tempore neque accusantium magni quia soluta.</p>
            </div>
        </div>
	{/each}
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