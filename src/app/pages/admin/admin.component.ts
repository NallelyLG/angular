import { Component, OnInit, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { ArticulosService} from '../../servicios/articulos.service';
import { Articulo} from '../../modelos/articulo';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ArticulosService]
})
export class AdminComponent implements OnInit {

  public articulos:Articulo[];

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, public as: ArticulosService ) {}

  ngOnInit() {
    this.articulos= this.as.articulos;
  }
  public nuevo(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }
  public agregar(){
    this.as.nuevo({
      nombre: 'Television',
        marca: 'Samsung',
        precio: 4000.5674,
        title: 'Television',
        description: '34 pulgadas',
        promotion: true,
        categoria: 'E',
        url:'assets/TVSAMSUNG.jpg',
        id: this.articulos.length,
        fecha: new Date()
    });
    this.articulos=this.as.articulos;
    this.modalRef.hide();
  }

  public borrar(articulo){
    this.as.borrar(articulo);
    this.articulos=this.as.articulos;
  }

}
