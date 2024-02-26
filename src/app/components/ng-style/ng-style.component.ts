import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template:`
  <p [ngStyle]="{'font-size':'15px'}" >
    Hola mundo...esta es una etiqueta
    </p>

    <p [style.fontSize]="'40px'" >
    Hola mundo...esta es una etiqueta
    </p>

    <p [style.fontSize.px]="tamano" >
    Hola mundo...esta es una etiqueta
    </p>

    <button class="btn btn-primary" (click)="tamano = tamano + 5">
    <i class="fa fa-plus"></i>
    </button>
    
    <button class="btn btn-primary" (click)="tamano = tamano - 5">
    <i class="fa fa-minus"></i>
    </button>
    `,
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {

  tamano:number = 10;
}
