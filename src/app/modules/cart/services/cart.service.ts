import { Injectable } from '@angular/core';
import { Amount, AmountItem, CartItem, ItemRef } from 'src/app/models/types/cart-item';
import { Id } from 'src/app/models/types/coffee';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { AppService } from '../../../services/app.service';
import { Observable, from } from 'rxjs';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsRef: ItemRef[] = [];
  constructor(
    private appService: AppService,
    private userService: UserService
  ) {
    // this.cartItemsRef = userService.getUserCartRef
  }

  cart_addItem(id: Id, selected: SizeOrDose): void {
    const itemRef = this.createCartRefItem(id, selected);

    if (this.isItemExist(itemRef, this.cartItemsRef)) {
      this.changeQty("increment", itemRef)
    } else {
      this.cartItemsRef.push(itemRef)
      this.userService.setValueToCartRef(itemRef);
    }
  }
  createCartRefItem(id: Id, selected: SizeOrDose): ItemRef {
    const itemRef: ItemRef = {
      itemId: id,
      amounts: this.createAmount(id, selected)
    }
    return itemRef
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

  changeQty<T extends ItemRef>(X: 'increment' | 'decrement', itemRef: T): void {
    this.cartItemsRef.forEach((cartRef: ItemRef) => {
      cartRef.itemId === itemRef.itemId ?
        itemRef.amounts.forEach((amount: AmountItem, i: number) => {
          if (amount.quantity === 1 && X === 'increment') {
            cartRef.amounts[i].quantity++
          } else if (amount.quantity === 1 && X === 'decrement') {
            cartRef.amounts[i].quantity--
          }
        }
        ) : false
    })
  }

  getCartItemsByRefArr(arr: ItemRef[]): CartItem[] {
    return arr.map((e: ItemRef, i: number, arr: ItemRef[]): any => {
      return this.getCartItemByRef(e)
    })
  }
  getCartItemByRef(ref: ItemRef): CartItem {
    return {
      item: this.appService.getItemById(ref.itemId),
      amounts: ref.amounts
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

  get cartObservable(): Observable<ItemRef> {
    return from(this.cartItemsRef)
  }


  // returning the index if it exist
  // private isItemExist<T extends ItemRef>(itemRef: T, arr: T[]): number | false {
  //   let index: number | false = false;
  //   arr.forEach((e: ItemRef, i: number) =>
  //     e.itemId === itemRef.itemId ? index = i : false
  //   )
  //   return index
  // }
}
