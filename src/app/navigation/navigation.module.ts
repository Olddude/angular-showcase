import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation.component';
import { MenubarModule } from 'primeng/menubar';


@NgModule({
  declarations: [NavigationComponent],
  imports: [
    CommonModule,
    MenubarModule
  ],
  exports: [NavigationComponent]
})
export class NavigationModule { }
