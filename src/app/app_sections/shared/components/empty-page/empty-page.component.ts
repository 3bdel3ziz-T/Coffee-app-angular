import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';

@Component({
  selector: 'empty-page',
  standalone: true,
  imports: [BtnShapeDirective, NgStyle],
  templateUrl: './empty-page.component.html',
  styleUrl: './empty-page.component.scss'
})
export class EmptyPageComponent implements OnInit {
  ngOnInit(): void {
    this.scale = `${this.getScaleValue} ${this.getScaleValue}`
  }
  @Input() msg: string = "Empty! let's make order."
  @Input() btnTxt: string = "make order now"
  scale: `${number} ${number}` = '1 1';
  get getScaleValue(): 1 | -1 {
    let randomNumber: number = Math.round(Math.random() * 10) + 1;
    return randomNumber / 2 === 1 ? 1 : -1;
  }
}
