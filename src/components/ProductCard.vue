<template>
    <div class="rounded overflow-hidden shadow-lg p-4 bg-white">
      <router-link :to="`/product/${product.id}`">
        <img class="w-full h-48 object-cover" :src="product.thumbnailUrl" alt="Product image">
      </router-link>
      <div class="px-2 py-4">
        <router-link :to="`/product/${product.id}`" class="font-bold text-xl mb-2">{{ product.name }}</router-link>
        <p class="text-gray-700 text-base line-clamp-4" v-html="product.description" />
      </div>
      <div class="px-2 pt-4 pb-2 flex justify-between items-center">
        <span class="text-gray-900 font-bold text-xl">{{ product.defaultDisplayedPriceFormatted }}</span>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Buy
        </button>
      </div>
    </div>
  </template>
  
<script setup lang="ts">
import type { Product } from '@/types';

defineProps<{
    product: Product
}>();
</script>   
  