import { CartItem, ItemRef } from "./cart-item"

export type OrderRef = {
  date: Date,
  cartRef: ItemRef[]
  isAccepted: boolean;
}
export type OrderItem = {
  date: Date,
  cartData: CartItem[],
  isAccepted: boolean,
}
