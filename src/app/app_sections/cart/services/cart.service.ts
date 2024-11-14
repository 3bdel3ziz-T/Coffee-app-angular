import { Injectable } from '@angular/core';
import { Amount, AmountItem, CartItem, ItemRef } from 'src/app/models/types/cart-item';
import { Id } from 'src/app/models/types/coffee';
import { Price, SizeOrDose } from 'src/app/models/types/size';
import { AppService } from '../../../services/app.service';
import { Observable, of } from 'rxjs';
import { UserService } from 'src/app/user/user.service';
import { OrderRef } from 'src/app/models/types/order-history';
import { HistoryService } from '../../orders-history/services/history.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private appService: AppService,
    private userService: UserService,
    // private historyService: HistoryService
  ) {
  }

  cart_addItem(id: Id, selected: number): void {
    if (this.isItemExist(id)) {
      this.changeQty("increment", id, selected)
      this.userService.get_cartRef
    } else {
      const itemRef = this.createCartRefItem(id, selected);
      this.changeQty("increment", id, selected)
      this.userService.set_cartRef(itemRef)
    }
    this.userService.set_UserData()
  }
  private createCartRefItem(id: Id, selected: number): ItemRef {
    const itemRef: ItemRef = {
      itemId: id,
      amounts: this.createAmount(id, selected)
    }
    return itemRef;
  }
  private createAmount(id: Id, selected: number): Amount {
    let amount: Amount;
    if (id.startsWith('C')) {
      amount = [
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
      amount[selected].quantity++
      return amount
    } else if (id.startsWith('B')) {
      amount = [{
        size: '250gm',
        quantity: 0,
      }, {
        size: '500gm',
        quantity: 0,
      }, {
        size: '1000gm',
        quantity: 0,
      }
      ]
      amount[selected].quantity++
      return amount
    } else throw 'the item is not coffee or beans.'
  }
  // private incrementSelected(selected: SizeOrDose, arr: Amount): void {
  //   arr.forEach((e: AmountItem) => {
  //     selected == e.size ? e.quantity++ : false;
  //   })
  // }

  private isItemExist(id: Id): boolean {
    const isAlreadyExist = this.userService.get_cartRef.find((itemRef: ItemRef) => itemRef.itemId === id)
    return isAlreadyExist !== undefined ? true : false;
  }

  qtyCount(arr: AmountItem[]): number {
    let booleans: boolean[] = [];
    arr.forEach((item: AmountItem) => item.quantity > 0 ? booleans.push(true) : false)
    return booleans.length
  };

  changeQty(action: 'increment' | 'decrement', itemId: Id, selected: number): void {
    this.userService.get_cartRef.forEach((itemRef: ItemRef) => {
      if (itemRef.itemId === itemId) {
        if (action === 'increment') {
          itemRef.amounts[selected].quantity++
        } else {
          itemRef.amounts[selected].quantity--
        }
      } else false;
    })
    this.userService.set_UserData()
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
  get makeOrderData(): OrderRef {
    let cartRef!: ItemRef[];
    this.cartObservable.subscribe({
      next: (itemRef: ItemRef[]) => { cartRef = itemRef },
    })
    return {
      date: new Date,
      cartRef: cartRef,
      isAccepted: false
    }
  }
  get cartObservable(): Observable<ItemRef[]> {
    return of(this.userService.get_cartRef)
  }
}
