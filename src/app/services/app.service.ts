import { Injectable } from '@angular/core';
import { CoffeeCup, CoffeeBeans, Id } from '../models/types/coffee';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { CartItem, CartItemRef } from '../models/types/cart-item';
import { Favorite } from '../models/types/favorite';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private selectedItemDetails!: (CoffeeCup| CoffeeBeans);
  private coffeeData: CoffeeCup[];
  private beansData: CoffeeBeans[];
  private cartData: CartItem[] = [];
  private cartItemRef: CartItemRef[] = [];
  private favoriteData: Favorite[] = [];

  constructor(private dataService: DataService) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData
    // this.itemRefArr = [
    //   {
    //     itemId: 'C1',
    //     amounts: [
    //       {
    //         size: "S",
    //         quantity: 1
    //       },
    //       {
    //         size: "M",
    //         quantity: 2
    //       },
    //       {
    //         size: "L",
    //         quantity: 0
    //       }
    //     ],
    //   },
    //   {
    //     itemId: 'B2',
    //     amounts: [
    //       {
    //         size: "S",
    //         quantity: 1
    //       },
    //       {
    //         size: "M",
    //         quantity: 2
    //       },
    //       {
    //         size: "L",
    //         quantity: 0
    //       }
    //     ],
    //   },
    //   {
    //     itemId: 'C5',
    //     amounts: [
    //       {
    //         size: "S",
    //         quantity: 1
    //       },
    //       {
    //         size: "M",
    //         quantity: 2
    //       },
    //       {
    //         size: "L",
    //         quantity: 0
    //       }
    //     ],
    //   },
    //   {
    //     itemId: 'C5',
    //     amounts: [
    //       {
    //         size: "S",
    //         quantity: 1
    //       },
    //       {
    //         size: "M",
    //         quantity: 2
    //       },
    //       {
    //         size: "L",
    //         quantity: 0
    //       }
    //     ],
    //   }
    // ] 
    this.getCartItemsById()
  }
  //One pattern to pass data to "component.ts"
  passData<T>(arr: T[]): T[] {
    return arr
  }
  //All application observables
  get coffeeObservable(): Observable<CoffeeCup> {
    return new Observable<CoffeeCup>((observer: any) => {
      this.coffeeData.forEach((e: CoffeeCup) => observer.next(e))
    })
  }
  get beansObservable(): Observable<CoffeeBeans> {
    return new Observable<CoffeeBeans>((observer: any) => {
      this.beansData.forEach((e: CoffeeBeans) => observer.next(e))
    })
  }
  get cartObservable(): Observable<CartItem> {
    return new Observable<CartItem>((observer: any) => {
      this.cartData.forEach((e: CartItem) => observer.next(e))
    })
  }
  get favoriteObservable(): Observable<CartItem> {
    return new Observable<CartItem>((observer: any) => {
      this.favoriteData.forEach((e: Favorite) => observer.next(e))
    })
  }
  //Get the cup or beans details data using id
  getItemDetailsById(id: Id): CoffeeCup | CoffeeBeans | 'ErrMsg' {
    if (id.startsWith('C')) {
      return this.findById<CoffeeCup>(this.coffeeData, id)
    } else if (id.startsWith('B')) {
      return this.findById<CoffeeBeans>(this.beansData, id)
    }
    else { return 'ErrMsg' }
    // console.log('this product field out!')
  }
  //Get the cart items using id
  getCartItemsById(): void {
    this.cartItemRef.forEach
      ((e: CartItemRef, i: number, arr: CartItemRef[]) => {
        if (this.cartItemRef[i].itemId.startsWith('C')) {
          this.cartData.push({
            item: this.findById<CoffeeCup>(this.coffeeData, this.cartItemRef[i].itemId),
            amounts: this.cartItemRef[i].amounts,
          })
        } else if (this.cartItemRef[i].itemId.startsWith('B')) {
          this.cartData.push({
            item: this.findById<CoffeeBeans>(this.beansData, this.cartItemRef[i].itemId),
            amounts: this.cartItemRef[i].amounts,
          })
        }
      })
    //   return this.findById<CoffeeCup>(this.coffeeData, id)
    // }
    // else { return 'ErrMsg' }
    // console.log('this product field out!')
  }
  getCartItemsRef(itemRef: CartItemRef): void {

  }


  private findById<T extends CoffeeCup | CoffeeBeans>(arr: T[], id: Id): T {
    return arr.find((e) => e.id == id)!
  }
  // private forEachById<T extends CoffeeCup | CoffeeBeans>(arr: T[], id: Id): T[] {
  //   return arr.forEach((e) => e.id == id)!
  // }

}
