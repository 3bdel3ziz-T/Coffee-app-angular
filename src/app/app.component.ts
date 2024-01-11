import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MenuBarComponent } from './modules/shared/components/menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './modules/shared/components/header/header.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        HeaderComponent,
        RouterOutlet,
        MenuBarComponent,
    ],
})
export class AppComponent { 
  constructor() {
  }
}
