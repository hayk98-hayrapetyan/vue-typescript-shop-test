<template>
  <RouterLink
    :to="`/category/${category.id}`"
    class="flex items-center bg-white rounded-lg border px-4 py-2"
  >
    <img
      class="w-12 h-12 rounded-full object-cover mr-4"
      :src="category.thumbnailUrl"
      alt="Category image"
    />
    <div class="text-lg font-semibold text-gray-900">{{ category.name }}</div>
  </RouterLink>
</template>

<script setup lang="ts">
import type { Category } from '@/types'

defineProps<{
  category: Category
}>()
</script>
