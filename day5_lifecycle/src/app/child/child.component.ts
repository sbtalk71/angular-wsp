import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterViewInit, AfterContentChecked {

  @Input() userName: string = '';

  @ViewChild('wrapper') wrapper!: ElementRef;
  @ContentChild('contentWrapper') contentWrapper!: ElementRef;

  @ViewChild('h1ref') h1_element!: ElementRef;

  counter: number = 0;
  constructor() {
    console.log("constructor Triggered : ", this.counter++);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges Triggered : ", this.counter++, changes);
  }
  ngOnInit(): void {
    console.log("ngOnInit Triggered : ", this.counter++);
    console.log("wrapper is ", this.counter++, this.wrapper);
    console.log("contentWrapper is ", this.counter++, this.contentWrapper);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck Triggered : ", this.counter++);
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit-wrapper is ", this.counter++, this.wrapper);
    console.log("ngAfterContentInit-contentWrapper is ", this.counter++, this.contentWrapper);
    
  }

  ngAfterViewInit(): void {
    console.log("ngAfterContentInit-wrapper is ", this.counter++, this.wrapper);
    console.log("ngAfterContentInit-contentWrapper is ", this.counter++, this.contentWrapper);
    (this.h1_element.nativeElement as HTMLElement).style.color="green";
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked-triggered ", this.counter++);
  }
}
