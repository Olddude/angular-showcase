import { Component } from '@angular/core';
import { Case } from '.';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private readonly service: HomeService
  ) { }

  title$ = this.service.title();
  cases$ = this.service.cases();

  updateCase(target: Case, selected: any): void {
    this.service.updateCase(target, selected);
  }

}
