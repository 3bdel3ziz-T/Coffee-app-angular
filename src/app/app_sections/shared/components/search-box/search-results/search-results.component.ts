import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/app_sections/cart/services/cart.service';
import { Item } from 'src/app/models/types/coffee';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.scss'
})
export class SearchResultsComponent implements OnChanges {
  @Input()
  searchTxt: string = '';

  results: Item[] = [];
  constructor(private appService: AppService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // this.appService.getItemArrByTitle(this.searchTxt)
    console.log('something changed')
  }
  getMatchedItems() {

  }

}
