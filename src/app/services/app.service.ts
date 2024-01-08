import { Injectable } from '@angular/core';
import { CoffeeCup, CoffeeBeans, Id } from '../models/types/coffee';
import { DataService } from './data.service';
import { Observable, of } from 'rxjs';
import { ItemRef } from '../models/types/cart-item';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private coffeeData: CoffeeCup[];
  private beansData: CoffeeBeans[];

  // private favoriteData: FavItem[] = [];

  private cartRef: ItemRef[] = [];
  // private favItemRef: ItemRef[] = [];

  constructor(private dataService: DataService) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData

    'cartRef' in localStorage ?
      this.getCartRef() : this.setCartRef()

    // this.cartData = this.getCartItemsById
    // this.getCartItemsById
  }
  //One pattern to pass data to "component.ts"
  passData<T>(arr: T[]): T[] {
    return arr
  }
  //-------------All application data observables----------------
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
  // get cartRefObservable(): Observable<ItemRef> {
  //   return new Observable<ItemRef>((observer: any) => {
  //     this.cartRef.forEach((e: ItemRef) => observer.next(e))
  //   })
  // }
  get cartRefObservable(): Observable<ItemRef[]> {
    this.getCartRef()
    return of(this.cartRef)
  }

  //----------Get the cup or beans details data using id----------

  getCartRefItems(itemRef: ItemRef): void {
    this.cartRef.push(itemRef)
    this.setCartRef();
    this.getCartRef();
    // this.getCartItemsById
  }
  //Get the cart items using id
  // get getCartItemsById(): CartItem[] {
  //   return this.cartRef.map
  //     ((e: ItemRef, i: number, arr: ItemRef[]): any => {
  //       return {
  //         item: this.getItemById(e.itemId),
  //         amounts: e.amounts
  //       }
  //     })
  // }

  // private mapById<T extends { itemId: Id }, G = (CoffeeCup | CoffeeBeans)>(arr1: T[]): G[] {
  //   const arr2: G[] = arr1.map((e: T, i: number, arr: T[]): any => {
  //     return this.getItemById(e.itemId);
  //   })
  //   return arr2
  // }

  getItemById(id: Id): CoffeeCup | CoffeeBeans {
    if (id.startsWith('C')) {
      return this.findById<CoffeeCup>(this.coffeeData, id)
    } else {
      return this.findById<CoffeeBeans>(this.beansData, id)
    }
  }

  private findById<T extends CoffeeCup | CoffeeBeans>(arr: T[], id: Id): T {
    return arr.find((e) => e.id == id)!
  }

  //----------------get and set cart data-----------------------
  private getCartRef(): void {
    this.cartRef = JSON.parse(localStorage.getItem('cartRef')!)
  }
  private setCartRef(): void {
    localStorage.setItem('cartRef', JSON.stringify(this.cartRef))
  }
}

