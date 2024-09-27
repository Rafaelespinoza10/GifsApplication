import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import {  HomePagesComponents } from './pages/home/home.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HomePagesComponents,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,
  ],
  exports: [
    HomePagesComponents,
    SearchBoxComponent,
    CardListComponent,
    CardComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
})
export class GifsModule { }
