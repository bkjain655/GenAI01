import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTypingAnimation]'
})
export class TypingAnimationDirective implements AfterViewInit {
  @Input() text: string = '';
  constructor(private eleRef: ElementRef) { }

  ngAfterViewInit(): void {
    this.typingEffect();
    return;
  }

  private typingEffect(): void {
    const word = this.text.split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.eleRef.nativeElement.innerText += word.shift();
      }
      setTimeout(loopTyping, 50);
    };
    loopTyping();
  }
}
