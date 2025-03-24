<script>
	import FacebookPosts from './FacebookPosts.svelte';
</script>
<div class="news">
	<h1>
		News
	</h1>
	<h2>Ultimi Post da Facebook</h2>
	<FacebookPosts />
	<h3>Resta aggiornato sui social della Lega Italiana Fibrosi Cistica Calabria</h3>
	<div class="follow">
		<a href="https://www.facebook.com/profile.php?id=61573542536873">
			Facebook
			<img alt="Facebook logo" src="/public/f_logo_RGB-Blue_1024.png" style="width: 4em; height: 4em">
		</a>
		<a href="https://www.instagram.com/legafibrosicisticacalabria/">
			Instagram
			<img alt="Instagram logo" src="/public/Instagram_Glyph_Gradient.png" style="width: 4em; height: 4em">
		</a>
	</div>
</div>

<style lang="scss">
	:global(body)	{
		overflow-x: hidden;
	}
	.follow	{
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 22em;

		> a	{
			display: flex;
			flex-flow: column;
	
			align-items: center;
		}
	}
	.news	{
		text-align: center;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - 29.2vh);
	}
	a {
		text-decoration: none;
	}
	a:visited {
		color: #000;
	}
</style>
