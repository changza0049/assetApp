import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawAddPage } from './withdraw-add.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawAddPageRoutingModule {}
