import { Component } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent {

  alerta:string = 'alert-danger';

  propiedades:any = {
    danger:false
  }
}
