<script setup lang="ts">
import Store from './components/Store.vue'
import CalculateShopList from './components/CalculateShopList.vue';

function goToShopList() {
  alert("We're going to navegate by the way")
}
</script>

<template>
  <header>
    <link href="/src/assets/main.css" rel="stylesheet" />
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <h1 class="text-3xl font-bold underline">Welcome to your shop list!</h1>
    <CalculateShopList />
    <button @click="goToShopList">Calculate your shop list</button>
    <button>Show latest receipt</button>
    <Store />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  /* distance between text lines */
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
