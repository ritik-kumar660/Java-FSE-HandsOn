import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // Configurable highlight color via input binding, default to 'rgba(234, 179, 8, 0.2)' or yellow
  @Input() appHighlight: string = 'rgba(234, 179, 8, 0.25)';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.highlight(this.appHighlight || 'rgba(234, 179, 8, 0.25)');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.highlight('');
  }

  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.transition = 'background-color 0.3s ease';
  }
}
