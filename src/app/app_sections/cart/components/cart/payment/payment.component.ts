import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { SubTitleDirective } from 'src/app/custom_directives/sub-title.directive';
import { CardShapeComponent } from 'src/app/app_sections/shared/components/card-shape/card-shape.component';
import { PriceComponent } from 'src/app/app_sections/shared/components/price/price.component';
import { TitleBarComponent } from 'src/app/app_sections/shared/components/title-bar/title-bar.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [BtnShapeDirective, PriceComponent, SubTitleDirective, TitleBarComponent, RouterLink, RouterOutlet, CardShapeComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {
  // card:!PaymentInfo
  card: boolean = true
}
