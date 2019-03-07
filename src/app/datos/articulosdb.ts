import { Articulo } from '../modelos/articulo';
export const articulosDB: Articulo[] = [
    {
        nombre: 'Television',
        marca: 'Samsung',
        precio: 4000.5674,
        title: 'Television',
        description: '34 pulgadas',
        promotion: true,
        categoria: 'E',
        url:'assets/TVSAMSUNG.jpg',
        id: 1,
        fecha: new Date()
    },
    {
        nombre: 'Television1',
        marca: 'Panasonic',
        precio: 3000.12348,
        title: 'Television',
        description: '24 pulgadas',
        promotion: true,
        categoria: 'E',
        id: 2,
        fecha: new Date()
    },
    {
        nombre: 'Television2',
        marca: 'LG',
        precio: 8000.67354,
        title: 'Television',
        description: '50 pulgadas',
        promotion: false,
        categoria: 'E',
        id: 3,
        fecha: new Date()
    },
    {
        nombre: 'Television3',
        marca: 'Sony',
        precio: 10000.0927534,
        title: 'Television',
        description: '75 pulgadas',
        promotion: true,
        categoria: 'E',
        id:4,
        fecha: new Date()
    },
    {
        nombre: 'Sabritas',
        marca: 'Sabritas',
        precio: 12.999,
        title: 'Sabritas',
        description: 'Adobadas',
        promotion: true,
        categoria: 'A',
        id:5,
        fecha: new Date()
    },
    {
        nombre: 'Sabritas1',
        marca: 'Sabritas',
        precio: 12.8888,
        title: 'Sabritas',
        description: 'Limon',
        promotion: false,
        categoria: 'A',
        id:6,
        fecha: new Date()
    },
    {
        nombre: 'Sabritas2',
        marca: 'Sabritas',
        precio: 12.76546,
        title: 'Sabritas',
        description: 'Crema y Especias',
        promotion: true,
        categoria: 'A',
        id:7,
        fecha: new Date()
    },
    {
        nombre: 'Sabritas3',
        marca: 'Sabritas',
        precio: 12.876544,
        title: 'Sabritas',
        description: 'Queso',
        promotion: false,
        categoria: 'A',
        id:8,
        fecha: new Date()
    }

];