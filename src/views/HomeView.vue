<script setup lang="ts">
import { ref } from 'vue';
import { getCategories, getProducts } from '@/services/api';
import type { Category } from '@/types';

const categories = ref<Category[]>([]);

const fetchCategories = async () => {
  const { data } = await getCategories();

  categories.value = data.items
};

fetchCategories();
</script>

<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <h1 class="text-2xl font-bold mb-4">Categories</h1>
        <ul>
          <li v-for="category in categories" :key="category.id" class="mb-2">
            <a class="text-blue-500 hover:underline">
              {{ category.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
