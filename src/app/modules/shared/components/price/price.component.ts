import { Component, Input, OnInit } from '@angular/core';
import { CurrencySign } from 'src/app/models/types/coffee';
import { Price } from 'src/app/models/types/size';
import { CssUnits } from 'src/app/models/types/style-units';

@Component({
  selector: 'price',
  template: `
  <span class="price" [ngStyle]="{ 'font-size': priceSize }">
    <span class="dollar-sign" [ngStyle]="{'font-size': SignSize}">{{ currency }}</span>
  {{price}}@if(price.includes('.') ? price.split('.')[1].length === 1 : false){0}
</span>
`,
  styles:
    `@use "../../../../../styles" as *;

  .price {
    font-weight: 500;
    color: $col-white;
    .dollar-sign {
      font-weight: 600;
      color: $col-orange;
    }
  }
`
})
export class PriceComponent implements OnInit {
  @Input() price: Price = "0.00";
  @Input() currency: CurrencySign = CurrencySign["USD"];
  @Input() priceSize: CssUnits;
  @Input() SignSize!: CssUnits;
  constructor() {
    this.priceSize = '15px';
  }
  ngOnInit(): void {
    this.price = `${+(Number(this.price).toFixed(2))}`
  }
}
