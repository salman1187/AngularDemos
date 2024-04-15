import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    standalone: true,
    selector: '[FormatText]'
})
export class TextFormatDirective {
  @Input('FormatText') 
  formatType: string = '';
  constructor(private el: ElementRef) {}

  @HostListener('input') onInput() {
    const inputValue: string = this.el.nativeElement.value;
    let formattedValue: string;

    switch (this.formatType) {
      case 'uppercase':
        formattedValue = inputValue.toUpperCase();
        break;
      case 'lowercase':
        formattedValue = inputValue.toLowerCase();
        break;
      case 'titlecase':
        formattedValue = this.toTitleCase(inputValue);
        break;
      default:
        formattedValue = inputValue;
        break;
    }

    this.el.nativeElement.value = formattedValue;
  }

  private toTitleCase(value: string): string {
    return value.replace(/\b\w/g, firstChar => firstChar.toUpperCase());
  }
}
