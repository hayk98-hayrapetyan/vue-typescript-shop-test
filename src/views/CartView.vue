<script setup lang="ts">
import { ref } from 'vue';
import { getProductById } from '@/services/api';
import type { Product } from '@/types';
import ProductCard from '@/components/ProductCard.vue'
import Loading from '@/components/Loading.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const isLoading = ref(false)
const isOrdered = ref(false)
const errorMessage = ref<string>();
const products = ref<Product[]>([]);

const handleDelete = (id: number) => {
    products.value = products.value.filter(product => product.id !== id)
};

const handleOrder = () => {
    isOrdered.value = true;

    cartStore.resetCart()
}

(async () => {
  try {
    isLoading.value = true;

    const productsData = await Promise.all(cartStore.cardProducts.map((productId: number) => getProductById(productId).then(res => res.data)))

    products.value = productsData
  } catch(_){
    errorMessage.value = 'Failed to load data. Please try again later.';
  } finally {
    isLoading.value = false
  }
})()
</script>

<template>
  <div class="px-4 py-12">
    <Loading v-if="isLoading" />
    <p v-else-if="errorMessage" class="text-red-500 font-bold text-center">{{ errorMessage }}</p>
    <p v-else-if="isOrdered" class="text-green-500 font-bold text-center">Congratulations! Your order has been placed.</p>
    <p v-else-if="!products.length" class="font-bold text-center">Nothing added yet!</p>
    <div v-else>
        <h1 class="text-2xl font-bold mb-4">Products</h1>
        <div v-if="products.length" class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <ProductCard v-for="product in products" :key="product.id" :product deletable @delete="handleDelete" />
        </div>
        <button :disabled="!products.length" @click="handleOrder" class="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 hover:disabled:bg-gray-400 text-white font-bold py-2 px-4 mt-8 w-64 block mx-auto rounded">
            Place order
        </button>
    </div>
  </div>
</template>
