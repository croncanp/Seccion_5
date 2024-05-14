import {Component} from '@angular/core';


@Component({
  template: `<h3>Counter: {{counter}}</h3>
  <button (click)="increaseBy(1)">+1</button>
  <button (click)="resetValue()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `,
  selector: 'app-counter'
})
export class CounterComponent {
  constructor() {
  }

  public counter: number = 10;

  increaseBy(value: number):void {
    this.counter += value;
  }

  resetValue(): void{
    this.counter = 10;
  }
}

