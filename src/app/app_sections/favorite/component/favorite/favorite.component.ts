import { Component } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Item as FavItem, Id as FavRef } from 'src/app/models/types/coffee';
import { DetailsComponent } from '../../../shared/components/item-details/details/details.component';
import { EmptyPageComponent } from 'src/app/app_sections/shared/components/empty-page/empty-page.component';
import { MenuBarComponent } from 'src/app/app_sections/shared/components/menu-bar/menu-bar.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AlertMsgComponent } from 'src/app/app_sections/shared/components/alert-msg/alert-msg.component';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  standalone: true,
  imports: [DetailsComponent, EmptyPageComponent, MenuBarComponent, TitleBarComponent, RouterLink, RouterOutlet,AlertMsgComponent]
})
export class FavoriteComponent {
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
