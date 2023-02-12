import { Component } from '@angular/core';
export interface PeriodicElement {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    firstName: 'Nabil',
    lastName: 'Hasan',
    email: 'nabilhasan1@gamil.com',
    password: 'nabil1',
  },
  {
    firstName: 'Nabil',
    lastName: 'Hasan',
    email: 'nabilhasan12@gamil.com',
    password: 'nabil12',
  },
  {
    firstName: 'Nabil',
    lastName: 'Hasan',
    email: 'nabilhasan123@gamil.com',
    password: 'nabil123',
  },
];


@Component({
  selector: 'app-app-user',
  templateUrl: './app-user.component.html',
  styleUrls: ['./app-user.component.scss'],
})
export class AppUserComponent {
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'password'];
  dataSource = ELEMENT_DATA;
}
