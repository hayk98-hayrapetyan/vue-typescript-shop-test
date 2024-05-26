<template>
  <div v-if="product" class="flex gap-10">
    <AppCarousel :slide-count="product.galleryImages.length" class="w-1/3 max-h-[500px] border rounded-lg">
      <div
        v-for="(gallery, index) in product.galleryImages"
        :key="index"
        class="w-full flex-shrink-0 h-auto"
      >
        <img
          :src="gallery.hdThumbnailUrl"
          alt="Gallery image"
          class="w-full object-cover rounded"
        />
      </div>
    </AppCarousel>
    <div class="w-2/3 flex flex-col gap-4">
      <h1 class="text-2xl font-bold">{{ product.name }}</h1>
      <p class="text-gray-700" v-html="product.description" />
      <div class="text-lg font-semibold text-gray-900">
        {{ product.defaultDisplayedPriceFormatted }}
      </div>
      <AppButton
        :disabled="cartStore.isProductAdded(product.id)"
        @click="cartStore.addProductToCart(product.id)"
        class="max-w-64"
      >
        Buy
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { getProductById } from '@/services/api'
import { useCartStore } from '@/stores/cart'
import AppCarousel from '@/components/App/AppCarousel.vue'
import AppButton from '@/components/App/AppButton.vue';

const cartStore = useCartStore()
const route = useRoute()

const { data: product } = await getProductById(+route.params.id)
</script>
