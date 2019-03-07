import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import {Articulo} from '../../modelos/articulo'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy{

  public color1: boolean= false;
  @Input() articulo: Articulo;
  @Output() onQuitar: EventEmitter<number> = new EventEmitter<number>();
  @Output() onSeleccionar: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {

    console.log("ngOnInit");
    console.log(this.articulo);

    setTimeout(()=>{ 
      this.articulo.title='HEADER 111112';
    },3000);
    
  }
  public accionEliminar (event:boolean){
    console.log("evento capturado de footer");
    this.onQuitar.emit(this.articulo.id);
  }
  public accionSeleccionar (event:boolean){
    console.log("evento capturado de footer");
    this.onSeleccionar.emit(this.articulo.id);
    this.color1= !this.color1;
  }

  public ngOnDestroy(){
    console.log ("He eliminado esta tarjeta");
  }

}
