<script setup lang="ts">

import { ref, reactive, computed } from 'vue'

const newProduct = ref(new Map());
const productName = ref("");
const productPrice = ref(0.0);
const productWeight = ref(0.0);

function addProduct() {
  newProduct.value.set(productName.value, { price: productPrice.value, weight: productWeight.value })
  productName.value = "";
  productWeight.value = 0.0;
  productPrice.value = 0.0;
}

</script>

<template>
  <label for="productName">Product: </label>
  <input v-model="productName" id="productName" />
  <label for="productPrice">Price:</label>
  <input type="text" v-model="productPrice" id="productPrice" />
  <label for="productWeight">Weight/Quantity</label>
  <input type="text" v-model="productWeight" id="productWeight" />
  <button class="bg-blue-500 text-white" @click="addProduct" type="button">Add a product</button>

  <table summary="This table gives some statistics about products cost in different branches around
    Malta">
    <thead>
      <tr>
        <th scope="col">Product name</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value) in newProduct">
        <td> {{ value[0] }}</td>
        <td> {{ value[1].price }}</td>
        <td> {{ value[1].weight }}</td>
      </tr>
    </tbody>
  </table>
</template>
