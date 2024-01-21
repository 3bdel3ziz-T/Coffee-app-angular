import { Component } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Item as FavItem, Id } from 'src/app/models/types/coffee';
import { DetailsComponent } from '../../../shared/components/item-details/details/details.component';
import { MsgComponent } from 'src/app/modules/shared/components/msg/msg.component';
import { MenuBarComponent } from 'src/app/modules/shared/components/menu-bar/menu-bar.component';
import { TitleSectionComponent } from 'src/app/modules/shared/components/title-section/title-section.component';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  standalone: true,
  imports: [DetailsComponent, MsgComponent, MenuBarComponent, TitleSectionComponent]
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
        next: (data: FavItem[]) => this.favData = data,
        error: (err: Error) => console.error(err),
        complete: () => { }
      });
  }
}
