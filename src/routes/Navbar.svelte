<div class="container">
	<a href="/"><img class="logo" src="/public/logo_FC_no_bg.png" alt="logo Lega Fibrosi Cistica Calabria"></a>
	<div class="navbar borderXwidth">
		<a href="/">Home</a>
		<a href="/storia">Storia</a>
		<a href="/fibrosicistica">La Fibrosi Cistica</a>
		<a href="/direttivo">Il Direttivo</a>
		<a href="/crrc">CRR Calabria</a>
	</div>
	<span class="donation">
		<a href="/donation"><i class="fa-regular fa-heart fa-sm"></i> Donazioni</a>
	</span>
</div>
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Nunito');

	:global(html, body)	{
		margin: 0px;
		font-family: Nunito;
	}
	img.logo	{
		max-height: 5em;
		left: 2em;
		position: relative;
	}
	div.container	{
		background: #016bb7;
		padding: 2em 0;
		align-items: center;
		justify-content: center;

		display: flex;
		flex-direction: row;

		position: sticky;
		z-index: 1;
		top: 0;
		left: 0;
	}

	div.navbar	{
		flex-grow: 1;
		display: flex;
		flex-flow: row;
		justify-content: center;
	}
	
	div.container a	{
		color: #fff;
		text-decoration: none;
		font: 20px Nunito;
		margin: 0px 10px;
		padding: 10px 10px;
		position: relative;
		z-index: 0;
		cursor: pointer;
	}

	span.donation	{
		position: relative;
		right: 2em;
		border: 3.2px solid #e47129;
		background-color: #e47129;
		border-radius: 6px;
		padding: .3em;
		> a	{
			align-items: center;
			gap: .2em;
			color: #fff;
			text-decoration: none;
		}
	}
	span.donation:hover	{
		background-color: #fff;
		border-color: #fff;
		> a	{
			color: #e47129;
		}
		cursor: pointer;
	}

	@media screen and (max-width: 600px)	{
		div.container	{
			display: grid;
			padding: 4em 1em;
		}
		img.logo	{
			max-height: 10em;
			top: 5.2em;
			left: 1em;
			opacity: 0.4;
		}
	}

	div.borderXwidth a:before, div.borderXwidth a:after
	{
		position: absolute;
		opacity: 0;
		width: 0%;
		height: 2px;
		content: '';
		background: #FFF;
		transition: all 0.3s;
	}

	div.borderXwidth a:before
	{
		left: 0px;
		top: 0px;
	}

	div.borderXwidth a:after
	{
		right: 0px;
		bottom: 0px;
	}

	div.borderXwidth a:hover:before, div.borderXwidth a:hover:after
	{
		opacity: 1;
		width: 100%;
	}
</style>