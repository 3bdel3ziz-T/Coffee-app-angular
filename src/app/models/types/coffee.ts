import { BeanTypes, CupCategory } from "./category"
import { Sizes } from "./size"

type Coffee = {
  description: string,
  roasted: `${RoastLvlS} Roasted`,
  // imagelink_square: any,
  // imagelink_portrait: any,
  average_rating: number,
  ratings_count: `${number},${number}`,
  isFavorite: boolean,
  type: 'Coffee' | 'Bean',
  index: number,
}

export enum RoastLvlS {
  'Light' = 'Light',
  'Medium' = 'Medium',
  'Dark' = 'Dark'
}

export type CoffeeCup = Coffee & {
  id: `C${number}`,
  name: CupCategory,
  price: Payment,
  ingredients: 'Milk',
  special_ingredient: 'With Steamed Milk',
}

export type CoffeeBeans = Coffee & {
  id: `B${number}`,
  name: `${BeanTypes} Beans`,
  price: Payment,
  ingredients: `${ImportedFrom}`,
  special_ingredient: `From ${ImportedFrom}`,
}

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

