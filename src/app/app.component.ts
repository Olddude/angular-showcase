import { Component } from '@angular/core';
import { SomeEnum, SomeOtherEnum } from '.';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-showcase';

  someEnum = SomeEnum;
  someOtherEnum = SomeOtherEnum;
}
