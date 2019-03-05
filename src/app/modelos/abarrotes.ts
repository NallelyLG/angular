import {Articulo} from './articulo';


export class Abarrotes implements Articulo {
    public nombre:string;
    public marca:string;
    public precio:number;
    public categoria: string;

    constructor(){
        this.categoria='abarrotes';


    }
    public imprimir(): string{
        return this.categoria;
    }
    public esAbarrotes(): boolean{
        return true;
    }
}