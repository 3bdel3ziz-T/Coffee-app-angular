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

  private cartItemsRef: ItemRef[] = [];
  private favItemsRef: Id[]  = [];

  constructor(private dataService: DataService) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData
    this.favItemsRef = ['C1', 'C3', 'B2'];
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
  get cartRefObservable(): Observable<ItemRef[]> {
    this.getCartRef()
    return of(this.cartItemsRef)
  }
  get favRefObservable(): Observable<Id[]> {
    this.getCartRef()
    return of(this.favItemsRef)
  }

  //----------Get the cup or beans details data using id----------

  getCartRefItems(itemRef: ItemRef): void {
    this.cartItemsRef.push(itemRef)
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
    this.cartItemsRef = JSON.parse(localStorage.getItem('cartRef')!)
  }
  private setCartRef(): void {
    localStorage.setItem('cartRef', JSON.stringify(this.cartItemsRef))
  }
}

