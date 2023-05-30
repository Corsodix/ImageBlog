<script lang="ts">
	function getRandomSize(min, max) {
		return Math.round(Math.random() * (max - min) + min);
	}

	var allImages = '';

    function test() {
        const width = Math.round(Math.random() * (600 - 200) + 200)
        const height = Math.round(Math.random() * (600 - 200) + 200)
  
        const imgsrc = `https://placekitten.com/${width}/${height}`
   
        return imgsrc
    }
    function testSizes() {
        const width = Math.round(Math.random() * (600 - 200) + 200) + 'px'
        const height = Math.round(Math.random() * (600 - 200) + 200) + 'px'
        //w-[32rem] 
        const twclass = `w-[${width}] h-[${height}] bg-slate-400`
        const instyle = `width: ${width}; height: ${height};`
        console.log(instyle)
        return instyle
    }

/* 	for (var i = 0; i < 25; i++) {
		var width = getRandomSize(200, 400);
		var height = getRandomSize(200, 400);
		allImages += '<img src="https://placekitten.com/' + width + '/' + height + '" alt="pretty kitty">';
	} */
/* 
    console.log(allImages)
    const photos = document.getElementById('photos')
    
	photos.innerHTML = allImages; */
</script>

<section id="photos">
    {#each {length: 20} as item}
        <img src={test()} alt="kitty">
        <!-- <div class="bg-slate-400 test" style={testSizes()}></div> -->
    {/each}
</section>

<style>
	.snippet-result-code {
		height: 500px;
	}

	#photos {
		/* Prevent vertical gaps */
		line-height: 0;
		-webkit-column-count: 5;
		-webkit-column-gap: 10px;
		-moz-column-count: 5;
		-moz-column-gap: 10px;
		column-count: 5;
		column-gap: 10px;
        padding: 50px;
	}

	#photos img {
		
		width: 100% !important;
		height: auto !important;
        padding: 10px;
        border-radius: 16px;
	}
 	#photos .test {

 		width: 100% /* !important */;
		height: auto !important; 
        /* padding: 10px; */
        margin: 20px;
        border-radius: 16px;
        
	}  

	@media (max-width: 1200px) {
		#photos {
			-moz-column-count: 4;
			-webkit-column-count: 4;
			column-count: 4;
		}
	}

	@media (max-width: 1000px) {
		#photos {
			-moz-column-count: 3;
			-webkit-column-count: 3;
			column-count: 3;
		}
	}

	@media (max-width: 800px) {
		#photos {
			-moz-column-count: 2;
			-webkit-column-count: 2;
			column-count: 2;
		}
	}

	@media (max-width: 400px) {
		#photos {
			-moz-column-count: 1;
			-webkit-column-count: 1;
			column-count: 1;
		}
	}

</style>
