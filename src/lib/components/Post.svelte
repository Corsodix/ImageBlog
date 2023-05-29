<script>
	const midVertical = 'https://i.ibb.co/rdVfdmh/IMG-0613.png';
	const minImageUrl = 'https://i.ibb.co/7kqNkXD/IMG-0613.png';
	const fullImageUrl = 'https://i.ibb.co/g4xF438/IMG-0613.png';
	const midHorizontal = 'https://i.ibb.co/t3ng4j0/alfa.png';

	let checked = false;

	let src = checked ? midVertical : midHorizontal;

	/* if(checked){
    src = midVertical
} else {
    src = midHorizontal
} */
</script>

<div>
	<label for="img">Vertical</label>
	<input type="checkbox" name="img" id="img" bind:checked />
</div>

<!-- <header class="nav">
	<div class="link">Home</div>
	<div class="link">Next</div>
	<div class="link">Settings</div>
	<div class="link">Profile</div>
</header>

<div class="post">
	{#if checked}
		<img src={midVertical} alt="IMG-0613" width="400" />
	{:else}
		<img src={midHorizontal} alt="IMG-0613" />
	{/if}
</div> -->

<div class="container">
	<img src={midVertical} alt="Norway"/>
	<div class="text-block">
		<h4>Nature</h4>
		<p>What a beautiful sunrisdasdasdeasdasdasd</p>
		<p>What a beautiful sunriseasdasdasdasdasdasdasdsdasd</p>
		<p>What a beautiful sunriseaasdasdsdasdaasd</p>
		<p>What a beautiful sunriseasdasdasd</p>
		<p>What a beautiful sunriseasdasdasd</p>
		<p>What a beautiful sunriseasdasdasd</p>
		<p>What a beautiful sunriseasdasdasd</p>
		<p>What a beautiful sunriseasdasdasd</p>
		<p>What a beautiful sunriseasdasdasd</p>
		<p>What a beautiful sunriseasdasdasd</p>
	</div>
</div>

<style>
	/* Container holding the image and the text */
	.container {
		position: relative;
		width: 400px;
		padding: 40px;
		background-color: red;
		border-radius: 20px;
	}

	/* Bottom right text */
	.text-block {
		position: absolute;
		top: 40px;
		left: 40px;
/* 		bottom: 20px;
		right: 20px; */
		background-color: rgba(0, 0, 0, 0.658);
		color: rgba(255, 255, 255, 0.678);
		padding-left: 20px;
		padding-right: 20px;
	}

	.post {
		display: flex;
		width: 500px;
		height: 500px;
		background-color: aqua;
		align-items: start;
	}
	img {
		height: inherit;
		width: inherit;
		object-fit: contain;
	}
	.nav {
		display: flex;
		padding: 1.25rem;
		gap: 1.25rem;
		width: 400px;
		background-color: rgb(255 192 203 / 1);
		border-radius: 1rem /* 16px */;
		justify-content: flex-end;
		margin-bottom: 0.75rem /* 12px */;
	}
	.link {
		background-color: rgb(255 99 71 / 1);
		border-radius: 1rem /* 16px */;
		padding: 0.75rem 1.25rem;
	}
</style>
