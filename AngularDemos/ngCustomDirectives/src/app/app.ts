import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ttClassDirective } from '../tt-class.directive';
import { ttIfDirective } from "../tt-if.directive";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ttToggleDirective } from '../tt-toggle.directive';
import { ttTooltipDirective } from '../tt-tooltip.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ttClassDirective, ttIfDirective, CommonModule, FormsModule, ttToggleDirective, ttTooltipDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngCustomDirectives');
  show: boolean = true;
}
