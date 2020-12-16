import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DropdownItemsService {

  getMenu(anyEnum: any): any[] {
    return Object.keys(anyEnum)
      .filter(key => Number.isNaN(+key))
      .map(key => {
        return {
          label: key,
          value: anyEnum[key]
        };
      });
  }

}
