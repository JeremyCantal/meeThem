import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: undefined },
    { title: 'Paramètres', url: '/parametres', icon: undefined },
    { title: 'Publication', url: '/publication', icon: undefined },
    { title: 'Ma page', url: '/ma-page', icon: undefined },
  ];

  constructor() {}
}
