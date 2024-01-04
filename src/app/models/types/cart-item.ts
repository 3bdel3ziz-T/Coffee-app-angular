import { CoffeeCup, CoffeeBeans } from "./coffee"
import { Size } from "./size"

export type CartItem = {
  item: CoffeeCup | CoffeeBeans,
  amounts: [
    S: {
      size: Size['S'],
      quantity: number
    }, M: {
      size: Size['M'],
      quantity: number
    }, L: {
      size: Size['L'],
      quantity: number
    }
  ]
}

export type Item = {
  size: Size['S'] | Size['M'] | Size['L'],
  quantity: number
}