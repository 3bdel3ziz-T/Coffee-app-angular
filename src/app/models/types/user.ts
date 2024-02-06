import { ItemRef } from "./cart-item"
import { Id } from "./coffee"
import { OrderRef } from "./order-history"

export interface IUser {
  userId: string | 'guest',
  userName: string | 'guest',
  age?: `${number}`,
  email: string,
  addresses: Address[],
  payments: PaymentInfo[],
  cartData: ItemRef[],
  favData: Id[],
  historyData: OrderRef[],
  appMode: 'light' | 'dark',
}

export type Address = {
  country: string,
  city: string,
  street: string,
  buildingNumber: `${number}`,
}

export type PaymentInfo = {
  cardName: string,
  cardType: string,
  cardNumber: `${number}`,
  holderName: string,
  validThru: `${number}/${number}`,
}
