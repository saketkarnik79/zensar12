import { Directive, ElementRef, Renderer2, Input, HostListener, HostBinding } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
    selector: '[ttToggle]'
})
class ttToggleDirective implements OnInit {
    private elementSelected: boolean = false;

    constructor(private el: ElementRef) { }

    ngOnInit() {}

    @HostListener('click')
    onClick() {
        this.elementSelected = !this.elementSelected;
        if (this.elementSelected) {
            //this.el.nativeElement.style.backgroundColor = 'yellow';
            this.el.nativeElement.classList.add('toggle');
        } else {
            //this.el.nativeElement.style.backgroundColor = 'white';
            this.el.nativeElement.classList.remove('toggle');
        }
    }
}
export { ttToggleDirective };