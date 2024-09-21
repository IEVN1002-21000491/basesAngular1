import { Component } from '@angular/core';
import { IProductos } from '../productos';
//ngIf=true, o false

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
imageWidth:number=60;
imageMargin:number=2;
muestraImg:boolean=true;
listFiltrer:string=''
muestImg():void{
  this.muestraImg=!this.muestraImg;
}
  productos:IProductos[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":"febrero 2 2023",
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.doj7AEdfffeesGJ0ygnaxwHaEK?rs=1&pid=ImgDetMain"
    },
    {
      "productoId":2,
      "Modelo":"POLO",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":"marzo 23 2004",
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://th.bing.com/th/id/OIP.h85FgeOhp9HdwsHeD2Jb1gHaFj?rs=1&pid=ImgDetMain"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":"septiembre 5 2021",
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://c.wallhere.com/photos/f6/ab/car_Chevrolet_Corvette-174939.jpg!d"
    }
  ]

}
