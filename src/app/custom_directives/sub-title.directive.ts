import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[subTitle]',
  standalone: true
})
export class SubTitleDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.style.cssText = `
      display: block;
      font-weight: 600;
      color: #aeaeae;
    `
  }

}
