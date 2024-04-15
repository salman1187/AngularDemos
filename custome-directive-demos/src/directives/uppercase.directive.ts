import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
    standalone:true,
    selector: '[upper-case]'
})
export class UpperCaseDirective {
   
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.textTransform = 'uppercase';
  }
}
