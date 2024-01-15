import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item as FavItem, Id as FavRef } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favItemsRef: FavRef[] = [];
  constructor(private appService: AppService) { }

  favRef_addItem(favRef: FavRef): void {
    this.favItemsRef.push(favRef)
    console.log(this)
    console.log(this.favItemsRef)
    console.log('fav service get it!')
  }

  private getFavItemsByRef<T extends FavRef, G = FavItem>(arr1: T[]): G[] {
    const arr2: G[] = arr1.map((e: T, i: number, arr: T[]): any => {
      return this.appService.getItemById(e);
    })
    return arr2
  }
  
  get favObservable(): Observable<FavItem[]> {
    return of(this.getFavItemsByRef(this.favItemsRef))
  }
}
