import { ItemRef } from "./cart-item"
import { Id } from "./coffee"
import { OrderRef } from "./order-history"

export type User = {
  userId: string,
  userName: string,
  age?: number,
  email: string,
  cartData: ItemRef[],
  favData: Id[],
  historyData: (OrderRef[])[],
  appMode: 'light' | 'dark',

}
