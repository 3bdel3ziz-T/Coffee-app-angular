import { Injectable } from '@angular/core';
import { User } from './user';
import { Id } from '../models/types/coffee';
import { ItemRef } from '../models/types/cart-item';
import { OrderItem, OrderRef } from '../models/types/order-history';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User = new User(
    'coffeeUser', 'userName', '1', '@', [], [], [], [], [], 'dark')
  constructor() {
    'userData' in localStorage ?
      this._user = this.get_UserData : this.set_UserData();
  }

  private get_Data<T>(arr: T): T {
    return arr
  }
  // get get_userName() {
  //   return this.get_Data<string>(this._user.userName)
  // }
  // get get_userId() {
  //   return this.get_Data<string>(this._user.userId)
  // }
  get get_favRef() {
    return this.get_Data<Id[]>(this._user.favData)
  }
  get get_cartRef() {
    return this.get_Data<ItemRef[]>(this._user.cartData)
  }
  // get get_orderRef() {
  //   return this.get_Data<OrderRef[]>(this._user.historyData)
  // }

  private set_Data<T>(favRef: T, arr: T[]): void {
    arr.push(favRef)
    this.set_UserData()
  }
  set_favRef(favRef: Id) {
    this.set_Data<Id>(favRef, this._user.favData)
  }

  // get getUserCartRef(): ItemRef[] {
  // console.log( this._user.cartData)
  // return this._user.cartData
  // }
  // setValueToCartRef(value: ItemRef) {
  //   console.log(value)
  //   // this._user.cartData.push(value)
  // }
  set_UserData(): void {
    localStorage.setItem('userData', JSON.stringify(this._user))
  }
  private get get_UserData(): User {
    const userData: any = JSON.parse(localStorage.getItem('userData')!);
    return userData
  }
}