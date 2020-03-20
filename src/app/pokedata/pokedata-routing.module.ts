import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedataPage } from './pokedata.page';

const routes: Routes = [
  {
    path: '',
    component: PokedataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokedataPageRoutingModule {}
