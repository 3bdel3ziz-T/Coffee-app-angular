import { Injectable } from '@angular/core';
import { Amount, AmountItem, CartItem, ItemRef } from 'src/app/models/types/cart-item';
import { Id } from 'src/app/models/types/coffee';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { AppService } from '../../../services/app.service';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { OrderRef } from 'src/app/models/types/order-history';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private appService: AppService,
    private userService: UserService
  ) {
  }

  cart_addItem(id: Id, selected: SizeOrDose): void {
    const itemRef = this.createCartRefItem(id, selected);

    if (this.isItemExist(itemRef, this.userService.get_cartRef)) {
      this.changeQty("increment", itemRef.itemId, selected)
    } else {
      this.userService.set_cartRef(itemRef)
    }
  }
  private createCartRefItem(id: Id, selected: SizeOrDose): ItemRef {
    const itemRef: ItemRef = {
      itemId: id,
      amounts: this.createAmount(id, selected)
    }
    return itemRef;
  }
  private createAmount(id: Id, selected: SizeOrDose): Amount {
    let amount: Amount = [
      {
        size: 'S',
        quantity: 0,
      }, {
        size: 'M',
        quantity: 0,
      }, {
        size: 'L',
        quantity: 0,
      }
    ]
    if (id.startsWith('C')) {
      this.incrementSelected(selected, amount)
    } else if (id.startsWith('B')) {
      amount[0].size = '250gm'
      amount[1].size = '500gm'
      amount[2].size = '1000gm'
      this.incrementSelected(selected, amount)
    }
    return amount
  }
  private incrementSelected(selected: SizeOrDose, arr: Amount): void {
    arr.forEach((e: AmountItem) => {
      selected == e.size ? e.quantity++ : false;
    })
  }

  private isItemExist<T extends ItemRef>(itemRef: T, arr: T[]): boolean {
    let booleans: boolean[] = [];
    arr.forEach((e: ItemRef) =>
      e.itemId === itemRef.itemId ? booleans.push(true) : false
    )
    return booleans.includes(true) ? true : false
  }

  qtyCount(arr: AmountItem[]): number {
    let booleans: boolean[] = [];
    arr.forEach((item: AmountItem) => item.quantity > 0 ? booleans.push(true) : false)
    return booleans.length
  };

  changeQty(action: 'increment' | 'decrement', itemId: Id, clickedSize: SizeOrDose): void {
    this.userService.get_cartRef.forEach((itemRef: ItemRef) => {
      itemRef.itemId === itemId ?
        itemRef.amounts.forEach((amount: AmountItem, i: number) => {
          if (clickedSize === amount.size) {
            if (action === 'increment') {
              amount.quantity++
            } else if (action === 'decrement') {
              amount.quantity--;
              (this.qtyCount(itemRef.amounts) === 0) ? this.cart_deleteItem(itemRef.itemId) : false;
            }
          }
        })
        : false;
      this.userService.set_UserData()
    })
  }

  cart_deleteItem(id: Id) {
    let index: number = this.userService.get_cartRef.findIndex((e: ItemRef) => id === e.itemId)
    this.userService.get_cartRef.splice(index, 1);
    this.userService.set_UserData()
  }

  getCartItemsByRefArr(arr: ItemRef[]): CartItem[] {
    return arr.map((e: ItemRef, i: number, arr: ItemRef[]): any => {
      return this.getCartItemByRef(e)
    })
  }
  private getCartItemByRef(itemRef: ItemRef): CartItem {
    return {
      item: this.appService.getItemById(itemRef.itemId),
      amounts: itemRef.amounts
    }
  }

  getTotal(cartItems: CartItem[]): Price {
    let totalPrice: number = 0;
    cartItems.forEach((item: CartItem, i: number, arr: CartItem[]) => {
      totalPrice += this.itemTotal(item)
    })
    return this.ToPrice(totalPrice)
  }
  itemTotal(item: CartItem): number {
    let itemTotal: number = 0;
    item.amounts.forEach((e) => {
      let itemPrice: number = 0;
      if (e.quantity > 0) {
        itemPrice += e.quantity * +this.getPriceBySize(item.item.id, e.size)
      }
      itemTotal += itemPrice
    })
    return itemTotal
  }
  getPriceBySize(id: Id, size: SizeOrDose): Price {
    let price!: Price;
    this.appService.getItemById(id).price.USD.sizes
      .forEach((e: {
        size: SizeOrDose;
        price: Price;
      }, i: number) => {
        e.size === size ? price = e.price : false
      })
    return price
  }

  ToPrice(price: number): Price {
    return `${price}`
  }

  makeOrder(historyRef: OrderRef) {
    this.userService.set_historyRef(historyRef);
  }

  get cartObservable(): Observable<ItemRef[]> {
    return of(this.userService.get_cartRef)
  }
}
