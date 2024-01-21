import { Component } from '@angular/core';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { SubTitleDirective } from 'src/app/custom_directives/sub-title.directive';
import { PriceComponent } from 'src/app/modules/shared/components/price/price.component';
import { TitleSectionComponent } from 'src/app/modules/shared/components/title-section/title-section.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [BtnShapeDirective, PriceComponent, SubTitleDirective, TitleSectionComponent],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})
export class PaymentComponent {

}
