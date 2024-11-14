import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomCursorComponent } from './app_sections/shared/components/custom-cursor/custom-cursor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterOutlet, CustomCursorComponent],
})
export class AppComponent {
  constructor() {
  }
}
