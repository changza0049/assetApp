import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawAddPageRoutingModule } from './withdraw-add-routing.module';

import { WithdrawAddPage } from './withdraw-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawAddPageRoutingModule
  ],
  declarations: [WithdrawAddPage]
})
export class WithdrawAddPageModule {}
