<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData

	$: ({ posts, user } = data)


</script>


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
			<input type="checkbox" name="published" id="published" checked>
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

