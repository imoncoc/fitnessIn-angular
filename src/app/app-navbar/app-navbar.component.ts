import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss'],
})
export class AppNavbarComponent {
  constructor(public router: Router) {}

  isShowMenu: boolean = false;
  navigations: any = [
    {
      id: 'home',
      title: 'Home',
      translate: 'HOME',
      type: 'item',
      url: '/home',
      icon: '',
      isVisible: true,
      isActive: false,
    },
    {
      id: 'products',
      title: 'Products',
      translate: 'PRODUCTS',
      type: 'item',
      url: '/products',
      icon: '',
      isVisible: true,
      isActive: false,
    },
    {
      id: 'gallery',
      title: 'Gallery',
      translate: 'Gallery',
      type: 'item',
      url: '/gallery',
      icon: '',
      isVisible: true,
      isActive: false,
    },
    {
      id: 'contact',
      title: 'Contact',
      translate: 'CONTACT',
      type: 'item',
      url: '/contact',
      icon: '',
      isVisible: true,
      isActive: false,
    },
  ];

  navigateRoute(route: string): void {
    this.router.navigate([route]);
    // this.activatedRoute$.next(route);
    // this.updateActiveNav(route);
    this.isShowMenu = false;
  }
}
