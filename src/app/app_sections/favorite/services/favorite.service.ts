import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item as FavItem, Id, Id as FavRef } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';
import { UserService } from 'src/app/user/user.service';
// import { favRef } from 'src/app/models/types/fav';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  constructor(
    private appService: AppService,
    private userService: UserService) {
  }

  fav_addItem(favRef: Id): void {
    if (!this.isFavMember(favRef)) {
      // console.log('added')
      this.appService.getItemById(favRef).isFavorite = true
      this.userService.set_favRef(favRef)
    } else {
      // console.log('deleted')
      this.appService.getItemById(favRef).isFavorite = false
      this.deleteItem<FavRef>(favRef, this.userService.get_favRef)
    }
  }

  private isFavMember(id: Id): boolean {
    const isAlreadyExist = this.userService.get_favRef.find((favRef: FavRef) => favRef === id)
    return isAlreadyExist !== undefined ? true : false;
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
