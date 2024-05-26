<template>
  <div class="rounded overflow-hidden shadow-lg p-4 bg-white">
    <RouterLink :to="`/product/${product.id}`">
      <img class="w-full h-48 object-cover" :src="product.thumbnailUrl" alt="Product image" />
    </RouterLink>
    <div class="px-2 py-4">
      <RouterLink :to="`/product/${product.id}`" class="font-bold text-xl mb-2">
      {{
        product.name
      }}
      </RouterLink>
      <p class="text-gray-700 text-base line-clamp-4" v-html="product.description" />
    </div>
    <div class="px-2 pt-4 pb-2 flex justify-between items-center">
      <span class="text-gray-900 font-bold text-xl">
        {{
        product.defaultDisplayedPriceFormatted
      }}
      </span>
      <AppButton
        :disabled="isAdded"
        @click="getButtonData.method(product.id)"
      >
        {{ getButtonData.text }}
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/types'
import { useCartStore } from '@/stores/cart'
import { computed } from 'vue'
import AppButton from '@/components/App/AppButton.vue';

const props = defineProps<{
  product: Product
  deletable?: boolean
}>()

const emit = defineEmits<{
  (event: 'delete', value: number): void
}>()

const cartStore = useCartStore()

const isAdded = computed(() => {
  return !props.deletable && cartStore.cardProducts.includes(props.product.id)
})

const getButtonData = computed(() => {
  if (props.deletable) {
    return {
      text: 'Delete',
      method: (id: number) => {
        emit('delete', id)

        cartStore.removeProductFromCart(id)
      }
    }
  } else {
    return {
      text: 'Buy',
      method: cartStore.addProductToCart
    }
  }
})
</script>
