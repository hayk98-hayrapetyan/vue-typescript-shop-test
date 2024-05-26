<template>
  <Loading v-if="isLoading" />
  <div v-else-if="product" class="px-4 py-12 flex gap-10">
    <div class="relative overflow-hidden w-1/3 max-h-[500px] border rounded-lg">
      <div class="flex transition-transform duration-300 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div v-for="(gallery, index) in product.galleryImages" :key="index" class="w-full flex-shrink-0 h-auto">
          <img :src="gallery.hdThumbnailUrl" alt="Gallery image" class="w-full object-cover rounded">
        </div>
      </div>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button v-for="(_, index) in product.galleryImages" :key="index" @click="goToSlide(index)" :class="{ 'bg-gray-900': index === currentSlide, 'bg-gray-400': index !== currentSlide }" class="w-4 h-4 rounded-full"></button>
      </div>
    </div>
    <div class="w-2/3 flex flex-col gap-4">
      <h1 class="text-2xl font-bold">{{ product.name }}</h1>
      <p class="text-gray-700" v-html="product.description" />
      <div class="text-lg font-semibold text-gray-900">{{ product.defaultDisplayedPriceFormatted }}</div>
      <button :disabled="isAdded" @click="cartStore.addProductToCart(product.id)" class="bg-blue-500 hover:bg-blue-700 disabled:bg-gray-400 hover:disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded max-w-64">
        Buy
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getProductById } from '@/services/api';
import type { Product } from '@/types';
import Loading from '@/components/Loading.vue';
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const route = useRoute();
const product = ref<Product>();
const isLoading = ref(false);
const currentSlide = ref(0);

const isAdded = computed(() => {
  return product.value && cartStore.cardProducts.includes(product.value.id)
})

const fetchProduct = async (id: string) => {
  try {
    isLoading.value = true;

    const response = await getProductById(+id);

    product.value = response.data;
  } catch (error) {
    console.error('Failed to fetch product:', error);
  } finally {
    isLoading.value = false;
  }
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

watch(() => route.params, (params) => {
  if(params.id){
    fetchProduct(params.id as string)
  }
}, { immediate: true })
</script>