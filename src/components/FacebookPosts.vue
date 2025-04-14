<template>
  <section class="posts">
    <article v-for="post in posts" :key="post.id">
      <a :href="post.permalink_url" target="_blank">
        <img :src="post.full_picture" alt="Facebook Post Image" />
        <h4>{{ post.message }}</h4>
      </a>
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
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 8vh 0;
}
article {
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  max-width: 300px;
  max-height: 320px;
}
h4  {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  max-height: 100%;
  object-fit: cover;
}
</style>
