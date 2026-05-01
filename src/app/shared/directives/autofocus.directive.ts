import { Directive, ElementRef, inject, afterNextRender } from '@angular/core';

@Directive({
  selector: '[appAutofocus]',
})
export class AutofocusDirective {
  private readonly el = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      this.el.nativeElement.focus();
    });
  }
}
