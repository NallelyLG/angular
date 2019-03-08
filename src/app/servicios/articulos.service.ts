import { Injectable } from '@angular/core';
import {Articulo} from '../modelos/articulo';
import {articulosDB} from '../datos/articulosdb'

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  public articulos: Articulo[]=articulosDB;

  constructor() { 
  }
    public getArticulos(){
      return this.articulos;
    }

    public get (id: number){
      let articulo: Articulo= this.articulos.
      find((item: Articulo) => {
      return item.id ==id;
      });
      return articulo;
    }
    public nuevo (articulo: Articulo){
      this.articulos.push(articulo);
    }
    public borrar (articulo: Articulo){
      for(let i=0; i< this.articulos.length; i++){
        if(articulo.id == this.articulos[i].id){
          this.articulos.splice(i, 1);
        }
        
      }
    }
    public actualizar (articulo:Articulo){
      for(let i=0; i>this.articulos.length; i++){
        if(this.articulos[i].id == articulo.id){
          this.articulos[i] = articulo;
        }
      }
    }
  
}
