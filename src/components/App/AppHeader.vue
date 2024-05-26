<script setup lang="ts">
import { RouterLink } from 'vue-router'
import CartIcon from '@/components/Icons/CartIcon.vue'
import HomeIcon from '@/components/Icons/HomeIcon.vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <header class="flex justify-between items-center sticky top-0 bg-white shadow-md py-4 px-8 z-50">
    <RouterLink to="/">
      <img
        alt="Vue logo"
        class="h-6"
        src="https://files.readme.io/13c53b7-small-Ecwid_LSLockup_BlackRGB_Ecwid_EN.png"
        height="24"
      />
    </RouterLink>

    <nav class="flex gap-4">
      <RouterLink to="/">
        <HomeIcon class="h-6 shrink-0" />
      </RouterLink>
      <RouterLink to="/cart" class="relative inline-block">
        <CartIcon class="h-6 shrink-0" />
        <span
          v-if="cartStore.getCount"
          class="absolute -top-1 -right-1 bg-red-500 text-white w-4 h-4 flex items-center justify-center rounded-full text-[10px] leading-[14px]"
        >
          {{ cartStore.getCount }}
        </span>
      </RouterLink>
    </nav>
  </header>
</template>
