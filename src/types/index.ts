export interface Response<T> {
  total: number
  count: number
  offset: number
  limit: number
  items: T[]
}

export interface Category {
  id: number
  orderBy: number
  hdThumbnailUrl: string
  thumbnailUrl: string
  originalImageUrl: string
  imageUrl: string
  originalImage: OriginalImage
  thumbnail: OriginalImage
  borderInfo: BorderInfo
  name: string
  nameTranslated: Translated
  url: string
  autogeneratedSlug: string
  customSlug: string
  productCount: number
  description: string
  descriptionTranslated: Translated
  enabled: boolean
  isSampleCategory: boolean
  seoTitle: string
  seoDescription: string
  alt: Alt
  parentId?: number
}

export interface Product {
  id: number
  sku: string
  thumbnailUrl: string
  unlimited: boolean
  inStock: boolean
  name: string
  price: number
  priceInProductList: number
  defaultDisplayedPrice: number
  defaultDisplayedPriceFormatted: string
  tax: Tax
  lowestPriceSettings: LowestPriceSettings
  isShippingRequired: boolean
  hasFreeShipping: boolean
  url: string
  autogeneratedSlug: string
  customSlug: string
  created: string
  updated: string
  createTimestamp: number
  updateTimestamp: number
  productClassId: number
  enabled: boolean
  options: Option[]
  fixedShippingRateOnly: boolean
  fixedShippingRate: number
  shipping: Shipping
  defaultCombinationId: number
  imageUrl: string
  smallThumbnailUrl: string
  hdThumbnailUrl: string
  originalImageUrl: string
  originalImage: OriginalImage
  borderInfo: BorderInfo
  description: string
  galleryImages: GalleryImage[]
  media: Media
  categoryIds: number[]
  categories: CategoryRelation[]
  defaultCategoryId: number
  seoTitle: string
  seoDescription: string
  attributes: unknown[]
  relatedProducts: RelatedProducts
  combinations: unknown[]
  dimensions: Dimensions
  volume: number
  showOnFrontpage: number
  isSampleProduct: boolean
  googleItemCondition: string
  isGiftCard: boolean
  discountsAllowed: boolean
  nameYourPriceEnabled: boolean
}

export interface Alt {
  main?: string
}

export interface BorderInfo {
  dominatingColor: DominatingColor
  homogeneity: boolean
}

export interface DominatingColor {
  red: number
  green: number
  blue: number
  alpha: number
}

export interface Translated {
  ru: string
}

export interface OriginalImage {
  url: string
  width: number
  height: number
}

export interface BorderInfo {
  dominatingColor: DominatingColor
  homogeneity: boolean
}

export interface DominatingColor {
  red: number
  green: number
  blue: number
  alpha: number
}

export interface CategoryRelation {
  id: number
  enabled: boolean
}

export interface Dimensions {
  length: number
  width: number
  height: number
}

export interface GalleryImage {
  id: number
  url: string
  thumbnail: string
  originalImageUrl: string
  imageUrl: string
  hdThumbnailUrl: string
  thumbnailUrl: string
  smallThumbnailUrl: string
  width: number
  height: number
  orderBy: number
  borderInfo: BorderInfo
}

export interface LowestPriceSettings {
  lowestPriceEnabled: boolean
}

export interface Media {
  images: Image[]
  videos: unknown[]
}

export interface Image {
  id: string
  isMain: boolean
  orderBy: number
  image160pxUrl: string
  image400pxUrl: string
  image800pxUrl: string
  image1500pxUrl: string
  imageOriginalUrl: string
}

export interface Option {
  type: string
  name: string
  nameTranslated: Translated
  choices: Choice[]
  defaultChoice: number
  required: boolean
}

export interface Choice {
  text: string
  textTranslated: Translated
  priceModifier: number
  priceModifierType: string
}

export interface OriginalImage {
  url: string
  width: number
  height: number
}

export interface RelatedProducts {
  productIds: number[]
  relatedCategory: RelatedCategory
}

export interface RelatedCategory {
  enabled: boolean
  categoryId: number
  productCount: number
}

export interface Shipping {
  type: string
  methodMarkup: number
  flatRate: number
  disabledMethods: unknown[]
  enabledMethods: unknown[]
}

export interface Tax {
  taxable: boolean
  defaultLocationIncludedTaxRate: number
  enabledManualTaxes: unknown[]
  taxClassCode: string
}