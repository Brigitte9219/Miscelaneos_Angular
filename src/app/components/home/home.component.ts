import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
  <app-ng-style></app-ng-style>

  <app-css></app-css>

  <app-clases></app-clases>

  <p appResaltado>
    Hola mundo
  </p>

  <p [appResaltado]="'green'">
   Hola mundo
  </p>

  <app-ng-switch></app-ng-switch>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
