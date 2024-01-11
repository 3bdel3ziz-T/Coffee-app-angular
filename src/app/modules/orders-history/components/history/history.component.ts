import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductItemComponent } from 'src/app/modules/shared/components/product-item/product-item.component';

@Component({
  selector: 'history-page',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss',
  standalone: true,
  imports:
    [ ProductItemComponent ]
})
export class HistoryComponent {

}
