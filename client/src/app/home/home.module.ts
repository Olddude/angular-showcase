import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SomedropdownModule } from '../somedropdown/somedropdown.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { homeFeatureKey, homeReducer } from './home.reducer';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SomedropdownModule,
    FormsModule,
    InputTextModule,
    StoreModule.forFeature(homeFeatureKey, homeReducer)
  ]
})
export class HomeModule { }
