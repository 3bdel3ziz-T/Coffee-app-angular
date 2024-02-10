import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item as FavItem, Id as FavRef, Item } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor(
    private appService: AppService,
    private userService: UserService) {
  }

  fav_addItem(favItem: Item): void {
    this.isFavTrue(favItem) ?
      this.userService.set_favRef(favItem.id) :
      this.deleteItem<FavRef>(favItem.id, this.userService.get_favRef)
  }

  private isFavTrue(favItem: Item): boolean {
    return favItem.isFavorite
  }
  private deleteItem<T>(favRef: FavRef, arr: T[]) {
    let index: number = arr.findIndex((e: T) => favRef === e)
    arr.splice(index, 1);
    this.userService.set_UserData()
  }

  getFavItemsByRef(arr1: FavRef[]): FavItem[] {
    const arr2: FavItem[] = arr1.map((e: FavRef, i: number, arr: FavRef[]): any => {

      this.appService.getItemById(e).isFavorite = true;

      return this.appService.getItemById(e);
    })
    return arr2
  }

  get favObservable(): Observable<FavRef[]> {
    return of(this.userService.get_favRef)
  }
}
