<a href="/"><img class="logo" src="/public/logo_FC_no_bg.png" alt="logo Lega Fibrosi Cistica Calabria"></a>
<div class="container borderXwidth">
	<a href="/">Home</a>
	<a href="/storia">Storia</a>
	<a href="/fibrosicistica">La Fibrosi Cistica</a>
	<a href="/direttivo">Il Direttivo</a>
	<a href="/crrc">CRR Calabria</a>
</div>
<div class="buttons">
	<span class="donation">
		<a href="/donation"><i class="fa-regular fa-heart fa-sm"></i> Donazioni</a>
	</span>
	<span class="login">
		<a href="/login"><i class="fa-solid fa-arrow-right-to-bracket"></i> Login</a>
	</span>
</div>
<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Nunito');

	:global(html, body)	{
		margin: 0px;
		font-family: Nunito;
	}
	img.logo	{
		position: absolute;
		max-height: 5em;
		top: 2.2em;
		left: 5em;
	}
	div.container	{
		background: #016bb7;
		margin: 0 auto;
		padding: 4em 3em;
		padding-right: 1em;
		width: 100vw;
		text-align: center;
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

	div.buttons	{
		display: flex;
		flex-flow: row;
		position: absolute;
		gap: 1em;
		right: 1.8em;
		top: 3.6em;
	}

	span.donation	{
		border: 3.2px solid #e47129;
		background-color: #e47129;
		border-radius: 6px;
		padding: .3em;
		> a	{
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
	span.login	{
		border: 3.2px solid #fff;
		background-color: #fff;
		border-radius: 6px;
		padding: .3em;
		> a	{
			color: #016bb7;
			text-decoration: none;
		}
	}
	span.login:hover	{
		background-color: #00406d;
		border-color: #00406d;
		> a	{
			color: #fff;
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
		div.buttons	{
			right: 6em;
			top: 19em;
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