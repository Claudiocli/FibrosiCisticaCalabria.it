<script>
// @ts-nocheck
	import { onMount } from 'svelte';
	import { getAllNews } from './api/data';

	let news = [];
	let error = null;

	async function fetchNews() {
		try {
			news = await getAllNews;
		} catch (err) {
			// console.error('Errore durante il recupero delle news:', err.message);
			error = err.message;
		}
	}

	onMount(fetchNews);
</script>

{#if error}
	<p>{error}</p>
{:else}
	{#each news as n}
		<a href={'/news/' + n.id}>
			<div class="news-container">
				<h4 class="news-title">{n.title}</h4>
				<p class="news-content">{n.content}</p>
			</div>
		</a>
	{/each}
{/if}

<style>
	.news-container {
		margin-left: 5em;
		margin-right: 5em;
		margin-top: 0.8em;
		margin-bottom: 0.8em;

		padding: 0.5em;

		border: 2px solid #016bb7;
		border-radius: 24px;
	}
	.news-content {
		text-overflow: ellipsis;
		overflow: hidden;
		white-space: nowrap;

		width: 100%;
		height: 20px;
	}
	a {
		text-decoration: none;
	}
	a:visited {
		color: #000;
	}
	.news-title {
		color: #272f5f;
	}
</style>
