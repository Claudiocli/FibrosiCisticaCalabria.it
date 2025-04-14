<template>
  <NavbarItem />
  <RouterView />
  <FooterItem />
</template>

<script lang="ts">
  import FooterItem from "@/components/FooterItem.vue";
  import NavbarItem from "@/components/NavbarItem.vue";
  import { defineComponent } from "vue";
  export default defineComponent({
    name: 'App',
    components: {
      FooterItem,
      NavbarItem,
    }
  })
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html  {
    height: 100vh;
  }
  body {
    margin: 0px;
    font-family: Nunito;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
		overflow-x: hidden;
  }
</style>
