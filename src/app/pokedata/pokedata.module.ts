import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PokedataPageRoutingModule } from './pokedata-routing.module';

import { PokedataPage } from './pokedata.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PokedataPageRoutingModule
  ],
  declarations: [PokedataPage]
})
export class PokedataPageModule {}
