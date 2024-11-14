import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'espresso-loader',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './espresso-loader.component.html',
  styleUrl: './espresso-loader.component.scss'
})
export class EspressoLoaderComponent {
  @Input() isLoading: boolean = false
}
