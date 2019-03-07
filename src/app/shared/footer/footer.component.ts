import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  public botones: any[]=[{
    name: 'Boton 1'
  },{
    name: 'Boton 2'
  },{
    name: 'Boton 3'
  }];

  public promotion: boolean= true;
  public color: boolean= false;
  public color1: boolean= false;
  @Output() onEliminar: EventEmitter<boolean> =new EventEmitter<boolean>();
  @Output() onSeleccionar: EventEmitter<boolean> =new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public aplicarPromocion(){
    this.color= !this.color;
  }
  public eliminar (){
    this.onEliminar.emit(true);
    console.log("estoy funcionando")
  }
  public seleccionar (){
    this.onSeleccionar.emit(true);
    this.color1= !this.color1;
    console.log("estoy seleccionando")
  }


}
