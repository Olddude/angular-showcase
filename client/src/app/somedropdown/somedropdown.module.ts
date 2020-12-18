import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomedropdownComponent } from './somedropdown.component';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SomedropdownComponent],
  imports: [
    CommonModule,
    DropdownModule,
    FormsModule
  ],
  exports: [SomedropdownComponent]
})
export class SomedropdownModule { }
