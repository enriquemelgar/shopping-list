<script setup lang="ts">

import { ref, computed } from "vue";

const name = ref("")

const greetingUser = computed(() => {
  return name.value
})
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <input type="text" v-model="name">
    <h1 class="green">{{ msg }} {{ greetingUser }} </h1>
    <h3>
      This is my shopping list! created in
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
