import { Injectable } from '@angular/core';
import { ItemRef } from '../models/types/cart-item';
import { User } from './user';
import { Console } from 'console';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private x: string = 'sdf';
  private _user: User = new User(
    'coffeeUser', 'userName', '1', '@', [], [], [], [], [], 'dark')
  constructor() {
    console.log('this is user service')
    'userData' in localStorage ? this._user = this.getUserData : this.setUserData();
    console.log(this._user.userId);
    console.log(this.x)
  }
  // get getUserCartRef(): ItemRef[] {
  // console.log( this._user.cartData)
  // return this._user.cartData
  // return 
  // }
  setValueToCartRef(value: ItemRef) {
    console.log(value)
    // this._user.cartData.push(value)
  }
  private setUserData(): void {
    // localStorage.setItem('userData', JSON.stringify(this._user))
  }
  private get getUserData(): User {
    const userData: any = localStorage.getItem('userData');
    return userData
  }
}