<template>
  <div class="py-12">
    <Loading v-if="isLoading" />
    <div v-else-if="errorMessage" class="text-red-500 font-bold">{{ errorMessage }}</div>
    <div v-else class="flex flex-col gap-12">
      <div>
        <h1 class="text-2xl font-bold mb-4">Categories</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <CategoryCard  v-for="category in categories" :key="category.id" :category />
        </div>
      </div>
      <div>
        <h1 class="text-2xl font-bold mb-4">Products</h1>
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <ProductCard v-for="product in products" :key="product.id" :product />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { getCategories, getProducts } from '@/services/api';
import type { Category, Product } from '@/types';
import ProductCard from '@/components/ProductCard.vue'
import CategoryCard from '@/components/CategoryCard.vue'
import Loading from '@/components/Loading.vue'

const isLoading = ref(false)
const errorMessage = ref<string>();
const categories = ref<Category[]>([]);
const products = ref<Product[]>([]);

(async () => {
  try {
    isLoading.value = true;
    errorMessage.value = undefined;

    const [categoriesData, productsData] = await Promise.all([
      getCategories(), 
      getProducts()
    ])

    categories.value = categoriesData.data.items
    products.value = productsData.data.items
  } catch(_){
    errorMessage.value = 'Failed to load data. Please try again later.';
  } finally {
    isLoading.value = false
  }
})()
</script>
