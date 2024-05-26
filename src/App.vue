<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Cart from '@/components/Icons/Cart.vue';
import Home from '@/components/Icons/Home.vue';
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const cardProducts = localStorage.getItem('cardProducts')

if(cardProducts){
  cartStore.setInitialItems(JSON.parse(cardProducts))
}
</script> 

<template>
  <div class="px-8 py-4">
    <header class="flex justify-between items-center">
      <img alt="Vue logo" class="h-6" src="https://files.readme.io/13c53b7-small-Ecwid_LSLockup_BlackRGB_Ecwid_EN.png" height="24" />

      <div class="wrapper">
        <nav class="flex gap-4">
          <router-link to="/">
            <Home class="h-6 shrink-0 " />
          </router-link>
          <router-link to="/cart">
            <div class="relative inline-block">
              <Cart class="h-6 shrink-0 " />
              <div v-if="cartStore.getCount" class="absolute -top-1 -right-1 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px] leading-[14px]">
                {{ cartStore.getCount }}
              </div>
            </div>
          </router-link>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
