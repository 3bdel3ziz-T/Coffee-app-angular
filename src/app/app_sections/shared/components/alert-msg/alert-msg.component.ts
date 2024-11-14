import { NgTemplateOutlet } from '@angular/common';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'alert-msg',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './alert-msg.component.html',
  styleUrl: './alert-msg.component.scss'
})
export class AlertMsgComponent implements AfterViewInit {

  @ViewChild('svgEl') svgEl!: ElementRef;
  msgType: msgType = 'success';
  icons: { 0: string, 1: string, 2: string, 3: string, 4: string } = {
    0: `
  <svg class="success-svg" xmlns = "http://www.w3.org/2000/svg" viewBox = "0 0 20 20" fill = "currentColor" aria - hidden="true" >
    <path fill - rule="evenodd" d = "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip - rule="evenodd" > </path></svg>`
    ,
    1: `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" height="24" fill="none"><path fill="#393a37" d="m12 1.5c-5.79844 0-10.5 4.70156-10.5 10.5 0 5.7984 4.70156 10.5 10.5 10.5 5.7984 0 10.5-4.7016 10.5-10.5 0-5.79844-4.7016-10.5-10.5-10.5zm.75 15.5625c0 .1031-.0844.1875-.1875.1875h-1.125c-.1031 0-.1875-.0844-.1875-.1875v-6.375c0-.1031.0844-.1875.1875-.1875h1.125c.1031 0 .1875.0844.1875.1875zm-.75-8.0625c-.2944-.00601-.5747-.12718-.7808-.3375-.206-.21032-.3215-.49305-.3215-.7875s.1155-.57718.3215-.7875c.2061-.21032.4864-.33149.7808-.3375.2944.00601.5747.12718.7808.3375.206.21032.3215.49305.3215.7875s-.1155.57718-.3215.7875c-.2061.21032-.4864.33149-.7808.3375z"></path></svg>`
    ,
    2: `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          ></path>
        </svg>`,
    3: `
        <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" class="error-svg">
          <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" fill-rule="evenodd"></path>
        </svg>`,
    4: `
        <svg height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z" fill="#393a37"></path></svg>`
  }
  colors: { main: string, alt: string }[] = [
    {
      main: '#379237', alt: '#9ed99c'
    },
    {
      main: '#4296f4', alt: '#bbd2e1'
    }
    , {
      main: '#facc15', alt: '#F7ED8F'
    },
    {
      main: '#DC3535', alt: '#f5aeae'
    }
  ]
  private types: { success: 0, info: 1, warn: 2, error: 3 } = {
    success: 0, info: 1, warn: 2, error: 3
  }
  txtToHTML(html: string): HTMLDivElement {
    const template: HTMLDivElement = document.createElement('div');
    template.innerHTML = html;
    return template
  }
  generateMsg(
    msgType: msgType,
    title: string,
    description: string,
    duration: number): void {
  }

  ngAfterViewInit(): void {
    this.svgEl.nativeElement.innerHTML = this.icons[this.types[this.msgType]]
      ;
    console.log(
      this.txtToHTML(this.icons[this.types[this.msgType]]), this.txtToHTML(this.icons[this.types[this.msgType]])

    )
  }

}


type msgType = 'success' | 'info' | 'warn' | 'error';


