import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';
import {articulosDB} from '../../datos/articulosdb';
import {Articulo} from '../../modelos/articulo';

@Component({
  selector: 'articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit, OnChanges {

  public lista: Articulo [] = articulosDB;

  constructor() { }

  ngOnInit() {
  }
  public quitar(id: number){
    for(let i=0; i< this.lista.length; i++){
      if (this.lista [1].id == id){
        this.lista.splice(i,1);
      }
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur  = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log("cur", cur);
      console.log("prev", prev);
    }
  }
}
