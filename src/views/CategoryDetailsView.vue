<template>
  <div v-if="category" class="flex flex-col gap-12">
    <h2 class="text-4xl font-bold mb-4 text-center">{{ category.name }}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard v-for="product in products" :key="product.id" :product />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { getCategoryById, getProductsByCategoryId } from '@/services/api'
import type { Category, Product } from '@/types'
import ProductCard from '@/components/Card/ProductCard.vue'

const route = useRoute()

const categoryId = +route.params.id

const [categoryData, productsData] = await Promise.all([
  getCategoryById(categoryId),
  getProductsByCategoryId(categoryId)
])

const category = ref<Category>(categoryData.data)
const products = ref<Product[]>(productsData.data.items)
</script>
