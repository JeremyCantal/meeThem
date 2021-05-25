import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaPagePage } from './ma-page.page';

const routes: Routes = [
  {
    path: '',
    component: MaPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaPagePageRoutingModule {}
