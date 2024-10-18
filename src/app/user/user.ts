import { ItemRef } from "../models/types/cart-item";
import { Id as FavItem } from "../models/types/coffee";
import { OrderRef } from "../models/types/order-history";
import { Address, IUser, PaymentInfo } from "../models/types/user";

export class User implements IUser {
  constructor(
    public userId: string = '0',
    public userName: string = 'userName',
    public age?: `${number}`,
    public email: string = '',
    public addresses: Address[] = [],
    public payments: PaymentInfo[] = [],
    public cartData: ItemRef[] = [],
    public favData: FavItem[] = [],
    public historyData: OrderRef[] = [],
    public appMode: 'light' | 'dark' = 'dark',
  ) { }
}
