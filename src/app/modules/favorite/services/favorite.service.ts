import { Injectable } from '@angular/core';
import { CoffeeBeans, CoffeeCup, Id as FavRef } from 'src/app/models/types/coffee';
import { FavItem } from 'src/app/models/types/favorite';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favItems!: FavItem[];
  constructor(private appService: AppService) {
    appService.favRefObservable.subscribe({
      next: (data: FavRef[]) => this.favItems = this.getFavItemsByRef(data),
      error: (err: Error) => console.error(err),
      complete: () => { }
    }) 
  }


  private getFavItemsByRef<T extends FavRef, G = (CoffeeCup | CoffeeBeans)>(arr1: T[]): G[] {
    const arr2: G[] = arr1.map((e: T, i: number, arr: T[]): any => {
      return this.appService.getItemById(e);
    })
    return arr2
  }
  get getFavData() {
    return this.appService.passData<FavItem>(this.favItems)
  }
}
