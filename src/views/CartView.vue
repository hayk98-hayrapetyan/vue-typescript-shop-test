<template>
  <p v-if="isOrdered" class="text-green-500 font-bold text-center">
    Congratulations! Your order has been placed.
  </p>
  <p v-else-if="!products.length" class="font-bold text-center">Nothing added yet!</p>
  <div v-else>
    <h1 class="text-2xl font-bold mb-4">Products</h1>
    <div v-if="products.length" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product
        deletable
        @delete="handleDelete"
      />
    </div>
    <AppButton @click="handleOrder" class="mt-8 w-64 block mx-auto"> Place order </AppButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { getProductById } from '@/services/api'
import type { Product } from '@/types'
import ProductCard from '@/components/Card/ProductCard.vue'
import AppButton from '@/components/App/AppButton.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const productsData = await Promise.all(
  cartStore.cardProducts.map((productId: number) =>
    getProductById(productId).then((res) => res.data)
  )
)

const products = ref<Product[]>(productsData)
const isOrdered = ref(false)

const handleDelete = (id: number) => {
  products.value = products.value.filter((product) => product.id !== id)
}

const handleOrder = () => {
  isOrdered.value = true

  cartStore.resetCart()
}
</script>
