import { Yoni } from './Yoni/angular';
import { Component,OnInit } from '@angular/core';
@Component({

  selector: 'app-menu',

  templateUrl: './menu.component.html',

  styleUrls: ['./menu.component.scss']

})
export class MenuComponent implements OnInit {

  yonis: Yoni[] = [
    {
      id: '0',
      nombre: 'Angular',
      imagen: '/assets/images/angular.png',
      categoria: 'por definir',
      destacado: true,
      etiqueta: 'Angular para todos',
      precio: 'L.0.00',
   
      descripcion: 'Angular desarrollado por alumnos de programacio IV Ceutec-Unitec.'
    },
    {
      id: '1',
      nombre: 'Node',
      imagen: '/assets/images/node.png',
      categoria: 'por definir',
      destacado: false,
      etiqueta: 'Angular para todos',
      precio: 'L.0.00',
   
      descripcion: 'Node desarrollado por alumnos de programacio IV Ceutec-Unitec.'
    },
    {
      id: '2',
      nombre: 'JS',
      imagen: '/assets/images/angular.png',
      categoria: 'por definir',
      destacado: false,
      etiqueta: 'JS para todos',
      precio: 'L.0.00',
   
      descripcion: 'JS desarrollado por alumnos de programacio IV Ceutec-Unitec.'
    },
    {
      id: '3',
      nombre: 'SQL',
      imagen: '/assets/images/sql.png',
      categoria: 'por definir',
      destacado: false,
      etiqueta: 'SQL para todos',
      precio: 'L.0.00',
   
      descripcion: 'SQL desarrollado por alumnos de programacio IV Ceutec-Unitec.'
    },
   ];
constructor(){}
ngOnInit() {
    
}
}
