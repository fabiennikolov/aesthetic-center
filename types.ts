export interface Option {
  name: string
  price: number
}

export interface SubVariant {
  showOptions?: boolean // Make showOptions property optional
  name: string
  price: number
  options?: Option[] // Optional options for sub-variants
}

export interface Variant {
  name: string
  price: number
  subVariants?: SubVariant[] // Optional sub-variants
}

export interface ServiceVariants {
  variants: Variant[]
}

export interface ServiceData {
  [key: string]: ServiceVariants
}
