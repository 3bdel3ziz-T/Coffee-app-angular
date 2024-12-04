import { BeanTypes, CoffeeCategory } from "./category"
import { Sizes } from "./size"

type Coffee = {
  cartPosition: -1 | number,
  orderPosition: -1 | number,
  price: Payment,
  description: string,
  roasted: `${RoastLvlS} Roasted`,
  imageLink_square: string,
  imageLink_portrait: string,
  average_rating: number,
  ratings_count: `${number},${number}`,
  isFavorite: boolean,
  type: 'Coffee' | 'Bean',
}

export enum RoastLvlS {
  'Light' = 'Light',
  'Medium' = 'Medium',
  'Dark' = 'Dark'
}

export type CoffeeCup = Coffee & {
  id: `C${number}`,
  name: Omit<CoffeeCategory, 'all'>,
  ingredients: 'Milk',
  special_ingredient: 'With Steamed Milk',
}

export type CoffeeBeans = Coffee & {
  id: `B${number}`,
  name: `${BeanTypes} Beans`,
  ingredients: `${ImportedFrom}`,
  special_ingredient: `From ${ImportedFrom}`,
}

export type Item = CoffeeCup | CoffeeBeans;

export type Id = `${'C' | 'B'}${number}`



// const validCurrencies = {
//   'USD': 'USD',
//   'EUR': 'EUR'
// }

// const keys: string[] = Object.keys(validCurrencies)

export type Payment = {
  USD: CurrencyDetails,
  // EUR?: CurrencyDetails
}

export type CurrencyDetails = {
  currencySign: CurrencySign,
  sizes: Sizes,
}

export enum CurrencySign {
  "USD" = '$',
  "EUR" = '€'
}

// export const CurrencySignObj: CurrencySign = {

// }

export type ImportedFrom = 'Africa' | 'Malaysia'

