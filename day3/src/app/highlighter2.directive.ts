import { Directive,OnInit,HostBinding,ElementRef,HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlighter2]'
})
export class Highlighter2Directive implements OnInit {

  @HostBinding("style.BackgroundColor") color:string="yellow";
  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.backgroundColor="yellow"
  }

  @HostListener("mouseenter")
  mouseenter(){
    this.color="red";
  }

  @HostListener("mouseleave")
  mouseleaves(){
    this.color="green";
  }

  @HostListener("click")
  click(){
    this.color="";
  }
}
