import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor( private elementRef:ElementRef) {
    elementRef.nativeElement.style.background = 'pink';
    elementRef.nativeElement.style.color = 'purple';
    elementRef.nativeElement.style.padding = '60px';
    elementRef.nativeElement.style.marginTop = "70px";
    elementRef.nativeElement.style.fontFamily = 'cursive';
  }

@HostBinding('style.background') background: string;

 @HostListener('mouseenter')
 mouseEnter(){
   console.log('mouse entered')
            this.background="pink";
  //  or
  //  alert("mouse entered")
  // or
  //   this.elementRef.nativeElement.style.background = 'red';
  //   this.elementRef.nativeElement.style.color = 'white';
  //   this.elementRef.nativeElement.style.fontSize = '40px';
   }

  @HostListener('mouseleave')
 mouseLeave(){
  console.log('mouse left')
               this.background="orange";
  // this.elementRef.nativeElement.style.background = 'green';
  // this.elementRef.nativeElement.style.color = 'black';
  // this.elementRef.nativeElement.style.fontSize = '20px';
}
}

