import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { MenuBarComponent } from '../menu-bar/menu-bar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    MenuBarComponent,
    RouterOutlet
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
