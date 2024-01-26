import { Component } from '@angular/core';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { CardShapeComponent } from 'src/app/modules/shared/components/card-shape/card-shape.component';
import { TitleSectionComponent } from 'src/app/modules/shared/components/title-section/title-section.component';

@Component({
  selector: 'add-card-form',
  standalone: true,
  imports: [BtnShapeDirective, TitleSectionComponent,CardShapeComponent],
  templateUrl: './add-card-form.component.html',
  styleUrl: './add-card-form.component.scss'
})
export class AddCardFormComponent {

}
