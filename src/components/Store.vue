<script setup lang="ts">

import { ref } from 'vue'

const productName = ref("")
</script>

<template>
  <label for="productName">Product {{ productName }} </label>
  <input v-model="productName" id="productName" />
  <label for="productPrice">Price:</label>
  <input type="text" id="productPrice" />
  <label for="productWeight">Weight/Quantity</label>
  <input type="text" id="productWeight" />

  <table summary="This table gives some statistics about products cost in different branches around
    Malta">
    <!-- <TR> -->
    <!--   <TH rowspan="1" /> -->
    <!--   <TH colspan="2" /> -->
    <!-- </TR> -->
    <!-- <TR> -->
    <!--   <TH>Product name</TH> -->
    <!-- </TR> -->
    <tr is="vue:product-list"></tr>
  </table>
</template>
