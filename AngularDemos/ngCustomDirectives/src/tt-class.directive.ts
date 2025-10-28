import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[ttClass]'
})
class ttClassDirective implements OnInit {
    @Input() ttClass: string = '';

    constructor(private el: ElementRef) {}

    ngOnInit(): void {
        this.el.nativeElement.classList.add(this.ttClass);
    }
}

export { ttClassDirective };