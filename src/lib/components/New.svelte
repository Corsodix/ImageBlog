
<script>
    	const midVertical = 'https://i.ibb.co/rdVfdmh/IMG-0613.png';
	const midHorizontal = 'https://i.ibb.co/t3ng4j0/alfa.png';
</script>


<div class="main">

        <img class="img" src={midHorizontal} alt="IMG-0613" />

    <div class="content">

    </div>
    <div class="footer">
        <h3>Dmitriy Savelev</h3>
        <p>{new Date().toTimeString()}</p>
    </div>
</div>

<style>
    .main {
        position: relative;
        width: 500px;
        height: 500px;
        background-color: grey;
        border-radius: 16px;
        padding: 5%;
    }
    .img {
        object-position: left top;  
        height: inherit;
        width: inherit;
		object-fit: contain;
        border-radius: 16px;
    }
    .footer {
        position: absolute;
        bottom: 10px;

    }
</style>