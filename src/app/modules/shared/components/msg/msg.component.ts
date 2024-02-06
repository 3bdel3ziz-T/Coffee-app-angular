import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { BtnShapeDirective } from 'src/app/custom_directives/btn-shape.directive';

@Component({
  selector: 'msg',
  standalone: true,
  imports: [BtnShapeDirective, NgStyle],
  templateUrl: './msg.component.html',
  styleUrl: './msg.component.scss'
})
export class MsgComponent implements OnInit {
  ngOnInit(): void {
    this.scale = `${this.getScaleValue} ${this.getScaleValue}`
  }
  @Input() msg: string = "Empty! let's make order."
  @Input() btnTxt: string = "make order now"
  scale: `${number} ${number}` = '1 1';
  get getScaleValue(): 1 | -1 {
    let min: number = 1;
    let max: number = 10;
    let randomNumber: number = Math.round(Math.random() * max) + min;
    return randomNumber / 2 === 1 ? 1 : -1;
  }
}
