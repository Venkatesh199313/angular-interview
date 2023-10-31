import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div id="myDiv" [ngClass]="{'change': varTrue == true }">
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
    <br/>
    <button (click)="changeColor()">Click Me </button>
    <div>
  `,
})
export class App {
  name = 'Angular';
  varTrue = false;
  hostColor = '';
  constructor() {}

  changeColor() {
    this.varTrue = !this.varTrue;
  }
}

bootstrapApplication(App);
