import { ItemRef } from "./cart-item"
import { Id } from "./coffee"

export type User = {
  userName: string,
  age?: number,
  email: string,
  cartData: ItemRef[],
  favData: Id[],
  historyData: (ItemRef[])[],
  appMode:'light' | 'dark',
  
}
