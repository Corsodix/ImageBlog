<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="pb-8 md:pb-0.5">
	<div class="py-10 p-0 mx-auto max-w-md">
		<header class="text-center py-4">
			<div class="text-center mb-2 text-3xl font-bold">Welcome back!</div>
			<p class="unstyled text-sm md:text-base opacity-50">
				Don't have an account yet? <a href="/">Create account</a>
			</p>
		</header>
		<div class="card p-6 space-y-6 shadow-xl text-left">
			<form class="space-y-4">
				<label class="label">
					<span>Email</span>
					<input type="email" placeholder="your-email@example.com" class="input" />
				</label>
				<label class="label">
					<span>Password</span>
					<input type="password" placeholder="Your password" class="input" />
				</label>
				<label class="inline-flex items-center">
					<input type="checkbox" class="checkbox" />
					<span class="ml-2">Remember me</span>
				</label>
				<button class="btn variant-filled-primary w-full">Reset Password</button>
			</form>
		</div>
	</div>
</div>

<div class="pb-8 md:pb-0.5">
	<div class="py-10 p-0 mx-auto max-w-md">
        
<label class="label">
	<span>Input</span>
	<input class="input" type="text" placeholder="Input" />
</label>
				
<label class="label">
	<span>Select</span>
	<select class="select">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
		<option value="4">Option 4</option>
		<option value="5">Option 5</option>
	</select>
</label>
				
<label class="label">
	<span>Textarea</span>
	<textarea class="textarea" rows="4" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
</label>
				
	</div>
</div>
