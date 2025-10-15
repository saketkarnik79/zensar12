import { Component } from '@angular/core';
import { AnotherComponent } from '../another-component/another-component';

@Component({
  selector: 'hello-world',
  imports: [ AnotherComponent ],
  templateUrl: './hello-world.html',
  styleUrl: './hello-world.css'
})
export class HelloWorld {
  title = 'Hello World';
}
