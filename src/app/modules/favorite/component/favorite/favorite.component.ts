import { Component } from '@angular/core';
import { FavoriteService } from '../../services/favorite.service';
import { Item as FavItem } from 'src/app/models/types/coffee';
import { DetailsComponent } from '../../../shared/components/item-details/details/details.component';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss',
  standalone: true,
  imports: [DetailsComponent]
})
export class FavoriteComponent {
  itemDetailsStyles =
    {
      width: '100%',
      height: 'fit-content',
      radius: '25px',
      background: ' linear-gradient(to bottom, #262B33 50%, #262B3300 50%)'
    }
  favorites!: FavItem[];
  constructor(private favService: FavoriteService) {
    this.favService.favObservable
      .subscribe({
        next: (data: FavItem[]) => this.favorites = data,
        error: (err: Error) => console.error(err),
        complete: () => { }
      });
  }
}
