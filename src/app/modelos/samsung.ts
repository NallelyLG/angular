import {Electronicos} from './electronicos'

export class Samsung extends Electronicos{
    constructor(){
        super();
    }
    public setPrecio(precio: number){
        this.precio= precio;
    }
    public getCategoria(): string{
        return this.categoria;
    }
}
