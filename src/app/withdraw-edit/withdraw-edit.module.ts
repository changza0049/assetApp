import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WithdrawEditPageRoutingModule } from './withdraw-edit-routing.module';

import { WithdrawEditPage } from './withdraw-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WithdrawEditPageRoutingModule
  ],
  declarations: [WithdrawEditPage]
})
export class WithdrawEditPageModule {}
