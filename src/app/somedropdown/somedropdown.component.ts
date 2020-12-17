import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { DropdownItemsService } from './dropdown-items.service';

@Component({
  selector: 'app-somedropdown',
  templateUrl: './somedropdown.component.html',
  styleUrls: ['./somedropdown.component.scss']
})
export class SomedropdownComponent implements OnChanges {

  @Input()
  someEnum: any;

  @Output()
  selectedItemChanged: EventEmitter<any> = new EventEmitter();

  menu: any[] = [];
  selectedItem: any;

  constructor(
    private readonly service: DropdownItemsService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.menu = this.service.getMenu(changes.someEnum.currentValue);
  }

  onSelectedItemChanged(event: any): void {
    this.selectedItemChanged.emit(event);
  }

}
