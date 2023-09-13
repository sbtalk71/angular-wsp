import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighter]'
})
export class HighlighterDirective implements OnInit {

  constructor(private element:ElementRef) { }

  ngOnInit(): void {
    (this.element.nativeElement as HTMLElement).style.backgroundColor="yellow";
  }

}
