<script setup lang="ts">
import { ref } from 'vue';
import Store from './Store.vue';

const products = ref(["Empty so far", "This is not empty anymore"]);
</script>

<template>
  <li v-for="product in products">
    {{ product }}
  </li>
  <Store />
</template>
