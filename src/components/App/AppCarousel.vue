<template>
    <div class="relative overflow-hidden">
      <div
        class="flex transition-transform duration-300 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <slot />
      </div>
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(number, index) in slideCount"
          :key="number"
          @click="goToSlide(index)"
          :class="{ 'bg-gray-900': index === currentSlide, 'bg-gray-400': index !== currentSlide }"
          class="w-4 h-4 rounded-full"
        />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
    slideCount: number
}>()

const currentSlide = ref(0)

const goToSlide = (index: number) => {
  currentSlide.value = index
}
</script>
