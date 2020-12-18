import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Injectable({ providedIn: 'root' })
export class NavigationService {

  buildMenu(): MenuItem[] {
    return [
      {
        label: 'Home',
        routerLink: '/home',
        icon: 'pi pi-home'
      }
    ];
  }

}
