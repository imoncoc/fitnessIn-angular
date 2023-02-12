import { Component } from '@angular/core';

@Component({
  selector: 'app-app-product',
  templateUrl: './app-product.component.html',
  styleUrls: ['./app-product.component.scss'],
})
export class AppProductComponent {
  products: any = [
    {
      name: 'Rogue HG 2.0 Bumper Plates',
      price: 400,
      originalPrice: 300,
      image: '../../assets/images/Rogue HG 2.0 Bumper Plates.jpg',
    },
    {
      name: 'Rogue Black kettle bell',
      price: 320,
      originalPrice: 250,
      image: '../../assets/images/black kettle bell.jpg',
    },
    {
      name: 'Rogue Usb Cable',
      price: 400,
      originalPrice: 300,
      image: '../../assets/images/usb-cable.jpg',
    },
    {
      name: 'Rogue Nike Athletic Shoes',
      price: 600,
      originalPrice: 500,
      image: '../../assets/images/Rogue nike athletic shoes.jpg',
    },
  ];
}
