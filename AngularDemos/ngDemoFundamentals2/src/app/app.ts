import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngDemoFundamentals2');
  // isDisabled: boolean = true;
  // someText = 'Template <script>alert("You are hacked")</script> Syntax';
  // clickCount:number=0;
  // value: string='';
  name="";
 clearName() {
  //alert(this.name);
   this.name='';
 }

  // onSave(){
  //   this.clickCount++;
  //   console.log(`You clicked ${this.clickCount} times`);
  //   console.log("Data saved!");
  // }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // onChange(event:any){
  //   this.value=(event.target as HTMLInputElement).value;
  // }
}
