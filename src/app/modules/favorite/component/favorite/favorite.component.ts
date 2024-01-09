import { Component } from '@angular/core';
import { FavItem } from 'src/app/models/types/favorite';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  itemDetailsStyles =
    {
      width: '100%',
      height: 'fit-content',
      radius: '25px',
      background: ' linear-gradient(to bottom, #262B33 50%, #262B3300 50%)'
    }
    favorites: FavItem[];
    constructor(private favService: FavoriteService) {
      this.favorites = this.favService.getFavData
    }
}
