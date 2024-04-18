import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'unit-testing-demo';
  counter: number = 0;

  onIncrease() {
    this.counter++;
  }

  findSum(first:number, second: number){

    this.saveResult();
    return first + second;
  }
  saveResult(){
    console.log("result saved");
    throw new Error();
  }

}
