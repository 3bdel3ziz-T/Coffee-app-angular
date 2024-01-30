import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  standalone: true,
  imports: [FormsModule, BtnShapeDirective]
})
export class SearchBoxComponent {
  @Output() emitSearchTxt: EventEmitter<string> = new EventEmitter<string>
  private lastValue: string = '';
  getSearchValue(inputRef: HTMLInputElement): void {
    if (!this.isItLastValue(inputRef.value)) {
      this.emitSearchTxt.emit(inputRef.value);
      this.lastValue = inputRef.value
    }else {
      console.error('this is the last value');
    }
  }
  isItLastValue(value: string):boolean {
    return value === this.lastValue ? true : false
  }
}
