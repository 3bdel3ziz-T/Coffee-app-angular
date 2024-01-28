import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item as FavItem, Id as FavRef, Item } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favItemsRef: FavRef[] = [];
  private testData: any =
  [
    'C1', 'C4', 'B2', 'C6'
  ];
  constructor(private appService: AppService) { }

  favRef_addItem(favItem: Item): void {
    this.isFavTrue(favItem) ?
      this.favItemsRef.push(favItem.id)
      : this.deleteItem<FavRef>(favItem.id, this.favItemsRef)
  }

  private isFavTrue(favItem: Item): boolean {
    return favItem.isFavorite
  }
  private deleteItem<T>(favRef: FavRef, arr: T[]) {
    let index: number = arr.findIndex((e: T) => favRef === e)
    arr.splice(index, 1);
  }

  getFavItemsByRef(arr1: FavRef[]): FavItem[] {
    const arr2: FavItem[] = arr1.map((e: FavRef, i: number, arr: FavRef[]): any => {

      this.appService.getItemById(e).isFavorite = true;

      return this.appService.getItemById(e);
    })
    return arr2
  }

  get favObservable(): Observable<FavRef[]> {
    return of(this.testData)
    // return of(this.favItemsRef)
  }
}
