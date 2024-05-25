<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="px-8 py-4">
    <header class="flex justify-between items-center">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="60" height="60" />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>
