<script lang="ts">
    import Auth from '$lib/components/forms/auth.svelte';
import type { PageData } from './$types';
    
    export let data: PageData;


</script>


<Auth data={data.form} />

{#if data.val === 1}
     <!-- content here -->
{:else}
     <!-- else content here -->
{/if}