<div class="container">
	<p>
		<a href="https://claudiolucisano.it/">&copy; Claudio Lucisano 2023<br/>All rigths reserved</a>
	</p>
	<p class="social">
		Seguici sui social
		<br/>
		<a href="https://www.facebook.com/fibrosicisticacalabria">Facebook</a>
		<br/>
		<a href="https://www.instagram.com/legafibrosicisticacalabria/">Instagram</a>
	</p>
</div>
<style lang="scss">
	:global(html)	{
		height: 100vh;
	}
	:global(body)	{
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	p.social	{
		cursor: default;

		position: relative;
		left: 74vw;

		text-align: center;
		align-self: center;
	}
	p.social > a:hover	{
		color: #e47129;
	}
	div.container	{
		background: #016bb7;
		margin: 0 auto;
		padding: 1em 2em;
		text-align: start;

		display: flex;
		flex-flow: row;
		
		width: 100%;
		bottom: 0;
	}
	div.container a, p	{
		color: #fff;
		text-decoration: none;
	}
</style>