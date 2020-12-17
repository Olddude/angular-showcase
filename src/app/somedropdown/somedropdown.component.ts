import {
  Component,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { SomedropdownService } from './somedropdown.service';

@Component({
  selector: 'app-somedropdown',
  templateUrl: './somedropdown.component.html',
  styleUrls: ['./somedropdown.component.scss']
})
export class SomedropdownComponent implements ControlValueAccessor {

  // tslint:disable-next-line: variable-name
  private _data: any;

  @Input() set data(value: any) {
    this._data = value;
    this.options = this.service.buildMenu(this._data);
  }

  get data(): any {
    return this._data;
  }

  // tslint:disable-next-line: variable-name
  private _disabled = false;

  @Input() set disabled(value: boolean) {
    this._disabled = value;
  }

  get disabled(): boolean {
    return this._disabled;
  }

  constructor(
    @Self()
    @Optional()
    private readonly ngControl: NgControl,
    private readonly service: SomedropdownService
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  value: any = '';
  options: any[] = [];

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private onChange(event: any): void {
    this.writeValue(event);
  }

  private onTouched(event: any): void {
  }

  onModelChange(event: any): void {
    this.onChange(event);
  }

}
