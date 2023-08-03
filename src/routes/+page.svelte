<script>
	// @ts-nocheck
	import { onMount } from 'svelte';
	import { captureException, withScope } from '@sentry/sveltekit';

	let news = [];
	let error = null;

	async function fetchNews() {
		try {
			const response = await fetch('/api/news', {
				method: 'get'
			});

			if (response.ok) {
				const data = await response.json();
				news = data.news || []; // Assegna un array vuoto come fallback se non sono presenti notizie
				error = null;
			} else {
				error = `Error: ${response.status} ${response.statusText}`;
			}
		} catch (err) {
			withScope((scope) => {
				scope.setLevel('warning');
				captureException(err);
			});
			error = err.message;
		}
	}

	export async function load({ page, fetch }) {
		try {
			const news = await fetchNews();
			return {
				props: {
					news: news || null
				}
			};
		} catch (err) {
			withScope((scope) => {
				scope.setLevel('warning');
				captureException(err);
			});
			return {
				props: {
					news: null,
					error: err.message
				}
			};
		}
	}
</script>

<div class="news-placeholder-temp">
	<h2>
		News
	</h2>
	<p>Coming soon</p>
	<h3>Resta aggiornato sui social della Lega Italiana Fibrosi Cistica Calabria</h3>
	<table class="social">
		<thead>
			<tr>
				<th><a href="https://www.facebook.com/fibrosicisticacalabria">Facebook</a></th>
				<th><a href="https://www.instagram.com/legafibrosicisticacalabria/">Instagram</a></th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>
					<a href="https://www.facebook.com/fibrosicisticacalabria"><img alt="Facebook logo" src="/public/f_logo_RGB-Blue_1024.png" style="width: 4em; height: 4em"></a>
				</td>
				<td>
					<a href="https://www.instagram.com/legafibrosicisticacalabria/"><img alt="Instagram logo" src="/public/Instagram_Glyph_Gradient.png" style="width: 4em; height: 4em"></a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
<!-- {#if error}
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
{/if} -->

<style>
	.social	{
	}
	.news-placeholder-temp	{
		text-align: center;
		display: flex;
		flex-direction: column;
		height: calc(100vh - 35vh);
	}
	.news-placeholder-temp > p	{
		animation: marquee 20s linear infinite;
	}
	.news-placeholder-temp:last-child	{
		flex-grow: 1;
	}
	@keyframes marquee {
		0% { transform: translate(100%,0); }
		100% { transform: translate(-100%,0); }
	}
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
