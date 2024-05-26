<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppLoading from '@/components/App/AppLoading.vue'
import AppHeader from '@/components/App/AppHeader.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const cardProducts = localStorage.getItem('cardProducts')

if (cardProducts) {
  cartStore.setInitialItems(JSON.parse(cardProducts))
}
</script>

<template>
  <AppHeader />

  <div class="px-8 py-12">
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense>
          <component :is="Component"></component>

          <template #fallback>
            <AppLoading />
          </template>
        </Suspense>
      </template>
    </RouterView>
  </div>
</template>
