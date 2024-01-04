import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[btnShape]',
  standalone: true
})
export class BtnShapeDirective implements OnInit {
  colors = {
    orange: '#d17842',
    white: '#fff',
  }
  constructor(private Element: ElementRef) {

    // Element.nativeElement.style.cssText =
    // `
    //   color: ${this.colors.orange};
    //   border-color: ${this.colors.orange};
    //   background: transparent;

    // --text - stroke - color: rgba(255, 255, 255, 0.6);
    // --animation - color: #37FF8B;
    // -webkit - text - stroke: 1px var(--text - stroke - color)
    // filter: drop - shadow(0 0 23px var(--animation - color))
    // -webkit - text - stroke: 1px var(--animation - color);
    // `
  }
  ngOnInit(): void {
    this.Element.nativeElement.style.cssText =
      `
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      fill: ${this.colors.white};
      color: ${this.colors.white};
      border: 2px solid transparent;
      background: ${this.colors.orange};
      transition: all 200ms;`

    // this.Element.nativeElement.onfocus =
    //   this.Element.nativeElement.style.cssText =
    //   `
    // color: ${this.colors.orange};
    // background-color: transparent;
    // border-color: ${this.colors.orange};
    // `
  }

}
