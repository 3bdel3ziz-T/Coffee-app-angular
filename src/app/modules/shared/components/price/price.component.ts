import { Component, Input } from '@angular/core';
import { CurrencySign } from 'src/app/models/types/coffee';

@Component({
  selector: 'price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.scss'
})
export class PriceComponent {
  @Input() price: `${number}` = "0.00";
  @Input() currency: CurrencySign = CurrencySign["USD"];
  @Input() priceSize: number;
  constructor() {
    this.priceSize = 15;
  }
}
