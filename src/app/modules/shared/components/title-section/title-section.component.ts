import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'title-section',
  standalone: true,
  imports: [NgTemplateOutlet,RouterLink],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss'
})
export class TitleSectionComponent {
  @Input() svg: 'setting' | 'back' = 'back';
  @Input() pageTitle: string = '';
  @Input() ImgSrc: string = '';
}
