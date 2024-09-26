import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  HomePagesComponents } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';



@NgModule({
  declarations: [
    HomePagesComponents,
    SearchBoxComponent,
    CardListComponent,
  ],
  exports: [
    HomePagesComponents,
    SearchBoxComponent,
    CardListComponent,

  ],
  imports: [
    CommonModule,
  ],
})
export class GifsModule { }
