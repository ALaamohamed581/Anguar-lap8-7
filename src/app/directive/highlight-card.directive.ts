import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appHighlightCard]',
  standalone: true,
})
export class HighlightCardDirective implements OnChanges {
  @Input('appHighlightCard') defulatColor: string = 'black';
  constructor(private ele: ElementRef) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.ele.nativeElement.style.boxShadow = `5px 5px 5px rgba(0,0,0,.5)`;
  }
  @HostListener('mouseover') over() {
    this.ele.nativeElement.style.backgroundColor = this.defulatColor;
    this.ele.nativeElement.style.boxShadow = `25px 25px 25px rgba(0,0,0,.5)`;
    this.ele.nativeElement.style.transition = `.5s`;
  }

  @HostListener('mouseout') out() {
    this.ele.nativeElement.style.backgroundColor = 'grey';
    this.ele.nativeElement.style.boxShadow = `5px 5px 5px rgba(0,0,0,.5)`;
    this.ele.nativeElement.style.transition = `.5s`;
  }
}
