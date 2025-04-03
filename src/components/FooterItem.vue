<template>
    <div class="container">
      <p class="author">
        <a href="https://claudiolucisano.it/">&copy; Claudio Lucisano 2025<br />All rights reserved</a>
      </p>
      <p class="social">
        Seguici sui social
        <a href="https://www.facebook.com/fibrosicisticacalabria">Facebook</a>
        <a href="https://www.instagram.com/legafibrosicisticacalabria/">Instagram</a>
      </p>
    </div>
</template>

<script lang="ts">
import { ref } from 'vue';

  const footerRef = ref<HTMLElement | null>(null);
  const footerHeight = ref<number>(0);
  if (footerRef.value) {
    footerHeight.value = footerRef.value.getBoundingClientRect().height;
    document.documentElement.style.setProperty('--footer-height', footerHeight.value + 'px');
  }
  export default {
    name: 'FooterItem'
  }
</script>

<style lang="scss" scoped>
  p.author {
    position: relative;
    font-size: small;
    left: 2em;
    flex: 1;
  }
  p.social {
    cursor: default;
    position: relative;
    right: 2em;
    flex: 0.2;
    flex-flow: column;
    text-align: end;
    align-items: center;
  }
  p.social > a:hover {
    color: #e47129;
  }
  .container {
    background: #016bb7;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    position: static;
    bottom: 0;
    right: 0;
    text-align: start;
  }
  .container a, p {
    display: flex;
    text-align: center;
    color: #fff;
    text-decoration: none;
  }
</style>
