import { Component, Input } from '@angular/core';
import { BoxStyles } from 'src/app/models/types/box';
import { CoffeeBeans, CoffeeCup } from 'src/app/models/types/coffee';

@Component({
  selector: 'details-section',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() item!: (CoffeeCup | CoffeeBeans);
  showFullDescription: boolean = false;
  @Input() backBtn: boolean;
  @Input() MainBoxStyle: BoxStyles;
  constructor() {
    this.showFullDescription = false;
    this.backBtn = true;
    this.MainBoxStyle = {
      width: '100%',
      height: '100%',
      radius: '0',
      background: '#0c0f14'
    }
  }
}
