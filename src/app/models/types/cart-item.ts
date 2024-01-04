import { CoffeeCup, CoffeeBeans } from "./coffee"
import { SizeOrDose, Size, Dose } from "./size"

export type CartItem = {
  item: CoffeeCup | CoffeeBeans,
  amounts: Amount
}

export type ItemRef = {
  itemId: Id,
  amounts: Amount
}

export type Amount = [
  S: {
    size: Size['S'] | Dose['S'],
    quantity: number
  }, M: {
    size: Size['M'] | Dose['M'],
    quantity: number
  }, L: {
    size: Size['L'] | Dose['L'],
    quantity: number
  }
]

// export type ItemId = Pick<CoffeeCup, 'id'> | Pick<CoffeeBeans, 'id'>
export type Id = `${'C' | 'B'}${number}`

export type Item = {
  size: SizeOrDose,
  quantity: number
}
