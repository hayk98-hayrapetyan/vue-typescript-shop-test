import axios from '@/plugins/axios'
import type { Category, Product, Response } from '@/types'
import type { AxiosResponse } from 'axios'

export const getCategories = (): Promise<AxiosResponse<Response<Category[]>>> =>
  axios.get('/categories')

export const getCategoryById = (id: number): Promise<AxiosResponse<Category>> =>
  axios.get(`/categories/${id}`)

export const getProducts = (): Promise<AxiosResponse<Response<Product[]>>> => axios.get(`/products`)

export const getProductsByCategoryId = (
  categoryId: number
): Promise<AxiosResponse<Response<Product[]>>> => axios.get(`/products?category=${categoryId}`)

export const getProductById = (productId: number): Promise<AxiosResponse<Product>> =>
  axios.get(`/products/${productId}`)
