import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BoxStyles } from 'src/app/models/types/box';
import { CoffeeBeans, CoffeeCup } from 'src/app/models/types/coffee';
import { SubTitleDirective } from '../../../../../custom_directives/sub-title.directive';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'details-section',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
  standalone: true,
  imports: [NgStyle, SubTitleDirective]
})
export class DetailsComponent {
  @Input() item!: (CoffeeCup | CoffeeBeans);
  showFullDescription: boolean = false;
  @Input() backBtn: boolean;
  @Input() MainBoxStyle: BoxStyles;
  @Output() favRef: EventEmitter<any> = new EventEmitter<any>
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
  emit_favRef(): void {
    // this.prodService.favRef_addItem(this.item.id)
    this.favRef.emit(this.item.id)
  }
}
