import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cardProducts = ref<number[]>([])

  const getCount = computed(() => cardProducts.value.length)

  const updateLocalStorage = () => {
    localStorage.setItem('cardProducts', JSON.stringify(cardProducts.value))
  }

  const setInitialItems = (ids: number[]) => {
    cardProducts.value = ids
  }

  const addProductToCart = (id: number) => {
    cardProducts.value.push(id)

    updateLocalStorage()
  }

  const removeProductFromCart = (id: number) => {
    cardProducts.value = cardProducts.value.filter((productId) => productId !== id)

    updateLocalStorage()
  }

  const resetCart = () => {
    cardProducts.value = []

    updateLocalStorage()
  }

  return {
    cardProducts,
    getCount,
    addProductToCart,
    removeProductFromCart,
    setInitialItems,
    resetCart
  }
})
