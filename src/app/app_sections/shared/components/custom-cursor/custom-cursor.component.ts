import { Component, ElementRef, ViewChild } from '@angular/core';
import { promises } from 'dns';

@Component({
  selector: 'custom-cursor',
  standalone: true,
  imports: [],
  template: `
  <img id="custom-cursor" src="assets/icons/coffee-bean.svg">
  `,
  styleUrl: './custom-cursor.component.scss'
})
export class CustomCursorComponent {
  @ViewChild('customCursor') cursorImg!: ElementRef<HTMLImageElement>;
  constructor() {
    document.addEventListener('mousemove', this.updateCursorXY.bind(this))
  }

  async updateCursorXY(event: MouseEvent): Promise<void> {
    // console.log(event)
    // (await this.cursorImg.nativeElement)
    // this.cursorImg.nativeElement.style.cssText = `transform: translate(${event.clientX}px, ${event.clientY}px);`
  }
}
