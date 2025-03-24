<div class="container" bind:offsetHeight={footerHeight}>
	<p class="author">
		<a href="https://claudiolucisano.it/">&copy; Claudio Lucisano 2023<br/>All rigths reserved</a>
	</p>
	<p class="social">
		Seguici sui social
		<a href="https://www.facebook.com/fibrosicisticacalabria">Facebook</a>
		<a href="https://www.instagram.com/legafibrosicisticacalabria/">Instagram</a>
	</p>
</div>
<script>
	export let footerHeight;
</script>
<style lang="scss">
	:global(html)	{
		height: 100vh;
	}
	:global(body)	{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	p.author	{
		position: relative;
		left: 2em;
		flex: 1;
	}
	p.social	{
		cursor: default;

		position: relative;
		right: 2em;
		flex: .2;
		flex-flow: column;

		text-align: end;
		align-items: center;
	}
	p.social > a:hover	{
		color: #e47129;
	}
	div.container	{
		background: #016bb7;
		align-items: center;
		justify-content: center;

		display: flex;
		flex-direction: row;

		position: relative;
		bottom: 0;
		right: 0;
		text-align: start;
	}
	div.container a, p	{
		display: flex;
		text-align: center;
		color: #fff;
		text-decoration: none;
	}
</style>