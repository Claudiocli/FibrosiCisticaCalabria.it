<script lang="ts">
    import { onMount } from 'svelte';
    let posts: any[] = [];
  
    onMount(async () => {
      const res = await fetch('/api/facebook-posts');
      posts = await res.json();
    });
</script>
<section class="posts">
    {#each posts as post}
      <article>
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img src={post.full_picture} alt="Facebook Post Image" />
        <div>
          <h3>{post.message}</h3>
          <a href={post.permalink_url} target="_blank">Leggi di più</a>
        </div>
      </article>
    {/each}
</section>
<style>
    .posts {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    article {
      border: 1px solid #ddd;
      padding: 1rem;
      border-radius: 8px;
      max-width: 300px;
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }
  </style>
  