import { Id, Item } from "./coffee"
import { SizeOrDose, Size, Dose } from "./size"

export type CartItem = {
  item: Item,
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

export type AmountItem = {
  size: SizeOrDose,
  quantity: number
}
