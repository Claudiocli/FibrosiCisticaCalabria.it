<script>
	import PersonCard from "../PersonCard.svelte";
	const direttivo = [
		{ name: 'Bokach Volha', role: 'Tesoriere', image: '/BV.jpg', description: 'Tesoriere della Lega Fibrosi Cistica Calabria' },
	];
</script>
<div class="container">
	<p>
		Eletto nel corso dell'Assemblea Generale dei Soci Lifc Calabria, il nuovo Direttivo Regionale si riunira' in data 28 marzo 2025 per designare le nuove cariche istituzionali che saranno attive sino al prossimo 2028.
	</p>
	<br/>
	<ul>
		<li>Paone Angela</li>
		<li>Bokach Volha</li>
		<li>Sacco Maria Antonietta</li>
		<li>Aiello Sergio</li>
		<li>Sgrò Demetrio</li>
		<li>Montesano Scarlata Alfredo</li>
		<li>Montesano Domenico</li>
		<li>Boragina Francesco</li>
		<li>Rotella Michele</li>
		<li>Anfosso Francesco</li>
	</ul>
	<!-- <div class="people-list">
		{#each direttivo as person}
		  <PersonCard {...person} />
		{/each}
	</div> -->
</div>
<style lang="scss">
	.container	{
		min-height: calc(100vh - 29.2vh);
		font-size: larger;
		> p	{
			text-align: center;
		}
	}
</style>