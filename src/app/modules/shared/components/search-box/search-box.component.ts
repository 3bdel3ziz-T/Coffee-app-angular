import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'search-box',
    templateUrl: './search-box.component.html',
    styleUrls: ['./search-box.component.scss'],
    standalone: true,
    imports: [FormsModule]
})
export class SearchBoxComponent {
  searchValue: string = '';
}
