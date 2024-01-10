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
  constructor(private element: ElementRef) {
    // this.element.nativeElement.addEventListener('click', this.setFocusStyles(this.element))
  }
  ngOnInit(): void {
    this.element.nativeElement.style.cssText =
      `
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      display: flex;
      align-items: center;
      border: none;
      justify-content: center;
      fill: ${this.colors.white};
      color: ${this.colors.white};
      border: 2px solid transparent;
      background: ${this.colors.orange};
      transition: all 200ms;
      `
  }

  // setFocusStyles(element: ElementRef) {
  //   console.log('focus')
    // element.nativeElement.style.cssText = `
    //     color: ${this.colors.orange};
    //     background - color: transparent;
    //     border - color: ${this.colors.orange};
      // `
  //   }

}
