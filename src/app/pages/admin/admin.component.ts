import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { ArticulosService} from '../../servicios/articulos.service';
import { Articulo} from '../../modelos/articulo';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {

  public articulos:Articulo[];
  public formArticulo: FormGroup;

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public as: ArticulosService ) {}

  ngOnInit() {
    this.articulos= this.as.articulos;
    this.formArticulo=new FormGroup({
      nombre: new FormControl(null,[Validators.required]),
      marca: new FormControl(null,[Validators.required]),
      precio: new FormControl(),
      tittle: new FormControl(),
      description: new FormControl(),
      promotion: new FormControl(),
      categoria: new FormControl(),
      url: new FormControl(),
      id: new FormControl(null),
      fecha: new FormControl(),
    });
  }
  public nuevo(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
    this.formArticulo.reset();
    this.formArticulo.patchValue({
      id:null
    });
  }
  public agregar(){
    console.log (this.formArticulo.valid);
    if (this.formArticulo.value.id == null){
    let articulo: Articulo=this.formArticulo.value;
    articulo.id=this.articulos.length +1;
    this.as.nuevo(articulo);
    this.articulos=this.as.articulos;
    
    }
    else { 
      let articulo: Articulo=this.formArticulo.value;
      this.as.actualizar(articulo);
      this.articulos= this.as.articulos;
    }
    this.modalRef.hide();
  }

  public borrar(articulo){
    this.as.borrar(articulo);
    this.articulos=this.as.articulos;
  }
  public editar(articulo: Articulo, template: TemplateRef<any>){
    this.modalRef=this.modalService.show(template);
    this.formArticulo.patchValue(articulo);
  }

}
