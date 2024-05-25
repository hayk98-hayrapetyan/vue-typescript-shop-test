import axios from '@/plugins/axios'
import type { Category, Product, Response } from '@/types'
import type { AxiosResponse } from 'axios'

export const getCategories = (): Promise<AxiosResponse<Response<Category>>> =>
  axios.get('/categories')

export const getProducts = (categoryId: number): Promise<AxiosResponse<Response<Product>>> =>
  axios.get(`/products?category=${categoryId}`)

export const getProduct = (productId: number): Promise<AxiosResponse<Response<Product>>> =>
  axios.get(`/products/${productId}`)
