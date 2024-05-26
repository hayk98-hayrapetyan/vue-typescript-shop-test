<template>
  <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
    <div
      class="loader ease-linear rounded-full border-4 border-t-4 border-t-blue-500 border-gray-200 h-24 w-24"
    ></div>
  </div>
</template>

<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin 1s linear infinite;
}
</style>
