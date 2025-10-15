import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HelloWorld } from './hello-world/hello-world';
import {FormsModule} from '@angular/forms';

class Name{
  firstName: string='';
  lastName: string | null=null;
  constructor(firstName:string, lastName: string | null){
    this.firstName=firstName;
    this.lastName=lastName;
  }
}

@Component({
  selector: 'root',
  imports: [RouterOutlet, FormsModule],//, HelloWorld],
  //template: '<h1>This is Angular 20 app</h1>',
  templateUrl: './app.html',
  //styles: 'h1 { color: blueviolet;}'
  styleUrl: './app.css'
})
export class App {
  firstName: string  = '';
  lastName: string = '';
  value:string ='';
  script:string ='';
  div:string ='';

  fullName: Name =new Name('James', null);

  protected readonly title = signal('Demo Fundamentals');
  
  constructor(){
    // throw new Error("Some Error.");
    this.firstName = 'James';
    this.lastName = 'Bond';
    this.script ='<script>alert("You are hacked")</script>'
    this.div='<div>this is a div</div>';
  }

  clicked(){
    console.log('Button Clicked!');
    alert('Button Clicked!');
  }
}
