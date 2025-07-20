<template>
  <header>
    <link href="/src/assets/main.css" rel="stylesheet" />
    <img alt="Vue logo" class="logo" src="./assets/shopping_cart.png" width="125" height="125" />
  </header>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/shopList">Shop-list</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  /* distance between text lines */
}

.logo {
  display: grid;
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
