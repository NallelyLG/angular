import {Articulo} from './articulo';


export class Electronicos implements Articulo {
    public nombre:string;
    public marca:string;
    public precio:number;
    public categoria: string;

    constructor(){
        this.categoria='electronicos';


    }
    public imprimir(): string{
        return this.categoria;
    }

    public esElectronicos(): boolean{
        return true;
    }
}
