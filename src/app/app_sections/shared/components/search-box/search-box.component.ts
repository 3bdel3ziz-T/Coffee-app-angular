import { AfterContentChecked, AfterViewChecked, Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';
import { SearchResultsComponent } from './search-results/search-results.component';

@Component({
  selector: 'search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
  standalone: true,
  imports: [FormsModule, BtnShapeDirective, SearchResultsComponent]
})
export class SearchBoxComponent {
  @ViewChild('searchContainer')
  containerDiv!: ElementRef<HTMLDivElement>;
  constructor() {
  }
  passSearchTxt(El: HTMLInputElement) {
  }
}
