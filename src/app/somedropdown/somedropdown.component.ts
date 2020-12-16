import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DropdownItemsService } from './dropdown-items.service';

@Component({
  selector: 'app-somedropdown',
  templateUrl: './somedropdown.component.html',
  styleUrls: ['./somedropdown.component.scss']
})
export class SomedropdownComponent implements OnChanges{

  @Input() someEnum: any;

  menu: any[] = [];
  selectedItem: any;

  constructor(
    private readonly service: DropdownItemsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.menu = this.service.getMenu(changes.someEnum.currentValue);
  }

}
