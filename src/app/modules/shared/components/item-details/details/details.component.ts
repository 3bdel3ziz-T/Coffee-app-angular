import { Component, Input } from '@angular/core';
import { CoffeeBeans, CoffeeCup } from 'src/app/models/types/coffee';

@Component({
  selector: 'details-section',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() item!: (CoffeeCup | CoffeeBeans);
  showFullDescription: boolean = false;
}
