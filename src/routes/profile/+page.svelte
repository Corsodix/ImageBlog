<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;


</script>

{#if data.val === 1}
     <!-- content here -->
{:else}
     <!-- else content here -->
{/if}