import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WithdrawEditPage } from './withdraw-edit.page';

const routes: Routes = [
  {
    path: '',
    component: WithdrawEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WithdrawEditPageRoutingModule {}
