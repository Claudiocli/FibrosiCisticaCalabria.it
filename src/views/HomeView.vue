<template>
	<div class="news">
		<h1>News</h1>
		<h2>Ultimi Post da Facebook</h2>
		<FacebookPosts />
		<h3>Resta aggiornato sui social della Lega Italiana Fibrosi Cistica Calabria</h3>
		<div class="follow">
			<a href="https://www.facebook.com/profile.php?id=61573542536873">
				Facebook
				<img alt="Facebook logo" src="/images/f_logo_RGB-Blue_1024.png" style="width: 4em; height: 4em">
			</a>
			<a href="https://www.instagram.com/legafibrosicisticacalabria/">
				Instagram
				<img alt="Instagram logo" src="/images/Instagram_Glyph_Gradient.png" style="width: 4em; height: 4em">
			</a>
		</div>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from 'vue';
import FacebookPosts from '../components/FacebookPosts.vue';
  export default defineComponent({
    name: 'HomeView',
    components: {
      FacebookPosts
    }
  });
</script>

<style scoped lang="scss">
  .news  {
    height: calc(100vh - var(--footer-height, 18em));
  }
	.follow {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 22em;
	}
	.follow > a {
		display: flex;
		flex-flow: column;
		align-items: center;
	}
	.news {
		text-align: center;
		display: flex;
		flex-direction: column;
		min-height: calc(100vh - var(--footer-height, 29.2vh));
	}
	a {
		text-decoration: none;
	}
	a:visited {
		color: #000;
	}
  @media (max-width: 768px) {
		.follow {
			flex-direction: column;
			gap: 2em;
		}
		.follow img {
			width: 3.5em;
			height: 3.5em;
		}
    .news {
      height: calc(100vh - var(--footer-height, 20.1vh));
    }
	}

	@media (max-width: 480px) {
		.news {
			font-size: 0.9rem;
		}

		.follow img {
			width: 3em;
			height: 3em;
		}
	}
</style>
