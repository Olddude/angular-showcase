import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SomedropdownService {

  buildMenu(anyEnum: any): any[] {
    return Object.keys(anyEnum)
      .filter(key => Number.isNaN(+key))
      .map(key => ({ label: key, value: anyEnum[key] })
    );
  }

}
