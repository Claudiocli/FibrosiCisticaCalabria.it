<script lang="ts">
	let PI = 'IT27G0760104400000006693688';
	let BCCC = 'IT88C0709104400000000154967';
	
	function copy(iban: string)	{
		navigator.clipboard.writeText(iban)
	}
</script>
<div class="container">
	<h2>Aiutaci a sostenere i pazienti e a combattere la Fibrosi Cistica</h2>
	<p>
		Con il tuo aiuto potrai contribuire concretamente a migliorare la qualità della vita e delle cure
		delle persone affette da fibrosi cistica, sostenendo i nostri progetti su tutto il territorio
		nazionale. Ti ricordiamo inoltre che la tua donazione è detraibile, ti basterà conservare la
		ricevuta del versamento ed allegarla alla tua dichiarazione dei redditi.
	</p>
	<h3>Scegli una delle modalità di donazione</h3>
	<h4>Tramite Paypal o con Carta di Credito</h4>

	<h4>Tramite Bonifico bancario</h4>
	<div class="bonifici">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<p title="copy Iban BCC del Catanzarese to clipboard" on:click={() => copy(BCCC)}>
			<em>BCC del Catanzarese</em>
			<br/>
			Iban: {BCCC}
		</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<p title="copy Iban Poste Italiane to clipboard" on:click={() => copy(PI)}>
			<em>Poste Italiane</em>
			<br/>
			Iban: {PI}
		</p>
	</div>
</div>
<style lang="scss">
	div.container	{
		min-height: calc(100vh - 29.2vh);
	}
	h2, h3, h4, em	{
		color: #016bb7;
	}
	div.bonifici>p	{
		cursor: pointer;
	}
</style>