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
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const posts = ref<any[]>([]);

    onMounted(async () => {
      const res = await fetch('/api/facebook-posts');
      posts.value = await res.json();
    });

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