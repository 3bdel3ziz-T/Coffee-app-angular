import { Component } from '@angular/core';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { CardShapeComponent } from 'src/app/modules/shared/components/card-shape/card-shape.component';
import { TitleBarComponent } from 'src/app/modules/shared/components/title-bar/title-bar.component';

@Component({
  selector: 'add-card-form',
  standalone: true,
  imports: [BtnShapeDirective, TitleBarComponent, CardShapeComponent],
  templateUrl: './add-card-form.component.html',
  styleUrl: './add-card-form.component.scss'
})
export class AddCardFormComponent {

}
