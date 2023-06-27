<script>
	import { onMount } from 'svelte';
	import { getNewsById } from '../api/data';
	import { useParams } from 'svelte-navigator';

	/**
	 * @type {{ Title: string; Content: string; ID: number; CreationDate: string; } | null}
	 */
	let news = null;

	const params = useParams();
	let id;

	onMount(() => {
		params.subscribe((routeParams) => {
			id = routeParams.id;

			if (id) {
				fetchNewsById(id);
			}
		});
	});

	/**
	 * @param {string} id
	 */
	async function fetchNewsById(id) {
		try {
			news = await getNewsById(id);
		} catch (err) {
			// Error handled with svelte
			news = null;
		}
	}

	/**
	 * @param {string} timestamp
	 */
	function formatDate(timestamp) {
		const date = new Date(timestamp);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth()).padStart(2, '0');
		const year = String(date.getFullYear());

		return `${day}/${month}/${year}`;
	}
</script>

{#if news}
	<div class="news-container">
		<h2>{news.Title}</h2>
		<p>{news.Content}</p>
		<p class="creation-date">{formatDate(news.CreationDate)}</p>
	</div>
{:else}
	<p>Nessuna news disponibile.</p>
{/if}

<style>
	.news-container {
		margin: 1em;
		padding: 1em;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	.creation-date {
		font-size: 12px;
		color: #888;
	}
</style>
