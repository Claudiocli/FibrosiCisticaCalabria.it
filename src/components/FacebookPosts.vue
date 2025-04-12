<template>
  <section class="posts">
    <article v-for="post in posts" :key="post.id">
      <img :src="post.full_picture" alt="Facebook Post Image" />
      <div>
        <h3>{{ post.message }}</h3>
        <a :href="post.permalink_url" target="_blank">Leggi di più</a>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts = ref<any[]>([]);

    const res = fetch('/api/facebook-posts.php');
    res.then(r => r.json().then(j => posts.value = j)
                          .catch(e => console.error(`Error ${e}`)))
        .catch(e => console.error(`Error ${e}`));

    return {
      posts
    };
  }
});
</script>

<style scoped>
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
