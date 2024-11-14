import { Injectable } from '@angular/core';
import { CoffeeCup, CoffeeBeans, Id, Item } from '../models/types/coffee';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { CartItem } from '../models/types/cart-item';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  private coffeeData: CoffeeCup[];
  private beansData: CoffeeBeans[];

  constructor(
    private dataService: DataService,
    private location: Location
  ) {
    this.coffeeData = dataService.getCoffeeData
    this.beansData = dataService.getBeansData
  }
  //One pattern to pass data to "component.ts"
  passData<T>(arr: T[]): T[] {
    return arr
  }

  //--------------- data observables-------------------------------
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

  //----------Get the cup or beans details data using id----------
  private findById<T extends Item>(arr: T[], id: Id): T {
    return arr.find((e) => e.id == id)!
  }
  getItemById(id: Id): Item {
    if (id.startsWith('C')) {
      return this.findById<CoffeeCup>(this.coffeeData, id)
    } else {
      return this.findById<CoffeeBeans>(this.beansData, id)
    }
  }


  //----------Get the cup or beans item data using title----------
  // getItemsByRefArr(refArr: ( | f)[]): Item[] {

  // }

  private findByTitle<T extends Item>(arr: T[], searchTxt: string): T {
    return arr.forEach((e) => e.name.includes(searchTxt))!
  }

  goBack(): boolean {
    const pathBefore = this.location.path(true)
    setTimeout(() => {
      this.location.back();
    }, 501)
    const pathAfter = this.location.path(true)
    return pathAfter === pathBefore ? false : true
  }

  getDate(date: Date): string {
    const orderDate = new Date(date);

    return orderDate.toLocaleDateString("en-US", {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });

    // const dateNow = new Date(date),
    //   MonthDay = dateNow.getDate(),
    //   hours = dateNow.getHours(),
    //   minutes = dateNow.getMinutes(),
    //   months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // let letter: string = '';
    // MonthDay === 1 ? letter = 'st' :
    //   MonthDay === 2 ? letter = 'nd' :
    //     MonthDay === 3 ? 'nd' : 'th'

    // let orderDate: string = `${MonthDay}${letter} ${months[dateNow.getMonth()]} ${hours > 12 ? hours - 12 : hours} : ${minutes < 10 ? '0' : ''}${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
    // return orderDate
  }
}
