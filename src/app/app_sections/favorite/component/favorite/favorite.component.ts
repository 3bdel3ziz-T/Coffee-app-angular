import { Component } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Item as FavItem, Id as FavRef } from 'src/app/models/types/coffee';
import { DetailsComponent } from '../../../shared/components/item-details/details/details.component';
import { MsgComponent } from 'src/app/app_sections/shared/components/msg/msg.component';
import { MenuBarComponent } from 'src/app/app_sections/shared/components/menu-bar/menu-bar.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  standalone: true,
  imports: [DetailsComponent, MsgComponent, MenuBarComponent, TitleBarComponent, RouterLink, RouterOutlet]
})
export class FavoriteComponent {
  itemDetailsStyles =
    {
      width: '100%',
      height: 'fit-content',
      radius: '25px',
      background: ' linear-gradient(to bottom, #262B33 50%, #262B3300 50%)'
    }
  favData!: FavItem[];
  constructor(private favService: FavoriteService) {
    this.favService.favObservable
      .subscribe({
        next: (data: FavRef[]) => this.favData = this.favService.getFavItemsByRef(data),
        error: (err: Error) => console.error(err),
        complete: () => { }
      });
  }
}
