import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Pipe Demo');

  toDate: Date = new Date();
  msg: string = 'Hello Angular 20 Pipes!';
  num: number = 1234567.8934345;
  per:number = 0.256897;
  cur: number = 1234.56;
}
