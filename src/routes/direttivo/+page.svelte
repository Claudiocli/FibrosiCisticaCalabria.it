<script>
	import PersonCard from "../PersonCard.svelte";
	const direttivo = [
		{name: 'Aiello Sergio', role: '', image: '/public/Sergio Aiello.jpg', description: ''},
		{name: 'Anfosso Francesco', role: '', image: '/public/Francesco Anfosso.jpg', description: ''},
		{name: 'Bokach Volha', role: '', image: '/public/Volha Bokach.jpg', description: ''},
		{name: 'Boragina Francesco', role: '', image: '/public/Boragina Francesco.jpg', description: ''},
		{name: 'Montesano Domenico', role: '', image: '/public/Domenico Montesano.jpg', description: ''},
		{name: 'Paone Angela', role: '', image: '/public/AngelaPaone.jpg', description: ''},
		{name: 'Rotella Michele', role: '', image: '/public/Michele Rotella.jpg', description: ''},
		{name: 'Sacco Maria Antonietta', role: '', image: '/public/Maria Antonietta Sacco.jpg', description: ''},
		{name: 'Scarlata Alfredo', role: '', image: '/public/Alfredo Scarlata.jpg', description: ''},
		{name: 'Sgrò Demetrio', role: '', image: '/public/Demetrio Sgrò.jpg', description: ''},
	];
</script>
<div class="container">
	<h2 style="margin-left: 1.2em;">Nuove cariche</h2>
	<p>
		Eletto nel corso dell'Assemblea Generale dei Soci Lifc Calabria, il nuovo Direttivo Regionale si riunira' in data 28 marzo 2025 per designare le nuove cariche istituzionali che saranno attive sino al prossimo 2028.
	</p>
	<br/>
	<div class="people-list">
		{#each direttivo as person, i}
		  <PersonCard {...person} index = {i} />
		{/each}
	</div>
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