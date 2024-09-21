import { Component } from '@angular/core';
//ngIf=true, o false

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  productos:any[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2023,
      "Marca":"NISSAN",
      "Color":"Azul",
      "ImagenUrl":"https://www.bing.com/images/search?view=detailV2&ccid=eGTJ0Kzf&id=66E473A11C14203219C7B42D06CF33A3EFC132E0&thid=OIP.eGTJ0KzfUR-ieQrYRDy0YQHaEW&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f63763%2fpexels-photo-63763.jpeg%3fcs%3dsrgb%26dl%3dcarro-deportivo-coche-coche-de-lujo-63763.jpg%26fm%3djpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7864c9d0acdf511fa2790ad8443cb461%3frik%3d4DLB76MzzwYttA%26pid%3dImgRaw%26r%3d0&exph=4190&expw=7139&q=imagenes+de+coches&simid=608005101816334480&FORM=IRPRST&ck=BE1681CABF20CEF2950FF30B5EA607AC&selectedIndex=0&itb=0"
    },
    {
      "productoId":2,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2023,
      "Marca":"AUDI",
      "Color":"Blanco",
      "ImagenUrl":"https://www.bing.com/images/search?view=detailV2&ccid=VjVkQbh%2f&id=6E7F6ECB7ED43B6173608EE5DA8EBDB48DDFF748&thid=OIP.VjVkQbh_VfqemB-Iiy6bXgHaE7&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.56356441b87f55fa9e981f888b2e9b5e%3frik%3dSPffjbS9jtrljg%26riu%3dhttp%253a%252f%252fwww.autopista.es%252fmedia%252fcache%252foriginal%252fupload%252fimages%252fimagegallery%252fimagegallery-45597-564c91cee3d2a.jpg%26ehk%3dLRSD%252f4NoJsMY2Qi7txioIBgTVtnwu6sKtTukRA%252f0V84%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=845&expw=1268&q=imagenes+de+coches&simid=608020546528110787&FORM=IRPRST&ck=7BF7C96DDB11B9C75B80209E1235A96C&selectedIndex=9&itb=0"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2023,
      "Marca":"KIA",
      "Color":"Azul",
      "ImagenUrl":"https://www.bing.com/images/search?view=detailV2&ccid=UCOWDJNp&id=ED396A038488498C16A1691ECE62DA2C6118B9F9&thid=OIP.UCOWDJNpUCiu2kXYunShMgHaEo&mediaurl=https%3a%2f%2fs1.1zoom.me%2fb5050%2f173%2fMercedes-Benz_2016_AMG_494570_3840x2400.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5023960c93695028aeda45d8ba74a132%3frik%3d%252bbkYYSzaYs4eaQ%26pid%3dImgRaw%26r%3d0&exph=2400&expw=3840&q=imagenes+de+coches&simid=608053463142572734&FORM=IRPRST&ck=7BD6136F744DC3D2B5E1C39EB59F7E31&selectedIndex=20&itb=0"
    }
  ]

}
