import { Component, OnInit } from '@angular/core';
import {ArticulosService} from '../../servicios/articulos.service';
import {ActivatedRoute} from '@angular/router';
import {Articulo} from '../../modelos/articulo'

@Component({
  selector: 'app-info-articulos',
  templateUrl: './info-articulos.component.html',
  styleUrls: ['./info-articulos.component.css'],
  providers: [ArticulosService]
})
export class InfoArticulosComponent implements OnInit {

  constructor(private articulosService: ArticulosService, private router:ActivatedRoute) { }
  public articulo:Articulo;

  ngOnInit() {
    let id:string = this.router.snapshot.paramMap.get('id');
    this.articulo =this.articulosService.get(Number(id));
  }

}
