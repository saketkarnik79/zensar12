import { Directive, Input, ElementRef, Renderer2, HostListener } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
  selector: '[ttTooltip]'
})
class ttTooltipDirective implements OnInit {
  @Input() toolTip: string = '';

  elToolTip: any;

    constructor(private elelementRef: ElementRef, private renderer: Renderer2) {}

    @HostListener('mouseenter') onMouseEnter() {
        if(!this.elToolTip){
            this.showHint();
        }
    }

    @HostListener('mouseleave') onMouseLeave() {
        if(this.elToolTip){
            this.removeHint();
        }
    }

    ngOnInit(): void {}

    removeHint() {
        this.renderer.removeClass(this.elToolTip, 'tooltip');
        this.renderer.removeChild(document.body, this.elToolTip);
        this.elToolTip = null;
    }

    showHint() {
        this.elToolTip = this.renderer.createElement('span');
        const text = this.renderer.createText(this.toolTip);
        this.renderer.appendChild(this.elToolTip, text);
        this.renderer.appendChild(document.body, this.elToolTip);
        this.renderer.addClass(this.elToolTip, 'tooltip');

        const hostPos = this.elelementRef.nativeElement.getBoundingClientRect();
        const tooltipPos = this.elToolTip.getBoundingClientRect();
        const top = hostPos.bottom + 10;
        const left = hostPos.left;
        this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
        this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
    }
}

export { ttTooltipDirective };