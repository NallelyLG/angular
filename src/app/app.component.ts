import { Component } from '@angular/core';
import {Articulo, Abarrotes, Electronicos, Samsung, Auto, Ford, Chevrolet} from './modelos'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'angular';

  constructor (){
    let articulo: Articulo;
    let categoria ='abarrotes';
    if (categoria=='abarrotes'){
      articulo =new Abarrotes();
      console.log(articulo.imprimir())
    }
    if (categoria=='electronicos'){
      articulo =new Electronicos();
      console.log(articulo.imprimir())
    }

    let samsung: Samsung = new Samsung();
    console.log (samsung.getCategoria());

    let ford: Auto = new Ford();
    console.log (ford.motor);

  }
}




