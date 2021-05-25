import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaPagePageRoutingModule } from './ma-page-routing.module';

import { MaPagePage } from './ma-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaPagePageRoutingModule
  ],
  declarations: [MaPagePage]
})
export class MaPagePageModule {}
