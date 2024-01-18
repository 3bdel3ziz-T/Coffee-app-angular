import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item as FavItem, Id as FavRef, Item } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favItemsRef: FavRef[] = [];
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

  getFavItemsByRef<T extends FavRef, G = FavItem>(arr1: T[]): G[] {
    const arr2: G[] = arr1.map((e: T, i: number, arr: T[]): any => {

      this.appService.getItemById(e).isFavorite = true;

      return this.appService.getItemById(e);
    })
    return arr2
  }

  get favObservable(): Observable<FavItem[]> {
    return of(this.getFavItemsByRef(this.favItemsRef))
  }
}
