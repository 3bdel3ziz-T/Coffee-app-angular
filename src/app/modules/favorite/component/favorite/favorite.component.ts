import { Component } from '@angular/core';

@Component({
  selector: 'favorite-page',
  templateUrl: './favorite.component.html',
  styleUrl: './favorite.component.scss'
})
export class FavoriteComponent {
  itemDetails =
    {
      width: '100%',
      height: 'fit-content',
      radius: '25px',
      background: ' linear-gradient(to bottom, #262B33 50%, #262B3300 50%)'
    }

}
