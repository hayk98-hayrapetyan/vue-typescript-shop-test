<template>
  <div class="flex flex-col gap-12">
    <div>
      <h2 class="text-2xl font-bold mb-4">Categories</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <CategoryCard v-for="category in categories" :key="category.id" :category />
      </div>
    </div>
    <div>
      <h2 class="text-2xl font-bold mb-4">Products</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <ProductCard v-for="product in products" :key="product.id" :product />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getCategories, getProducts } from '@/services/api'
import type { Category, Product } from '@/types'
import ProductCard from '@/components/Card/ProductCard.vue'
import CategoryCard from '@/components/Card/CategoryCard.vue'

const [categoriesData, productsData] = await Promise.all([getCategories(), getProducts()])

const categories = ref<Category[]>(categoriesData.data.items)
const products = ref<Product[]>(productsData.data.items)
</script>
