import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: 'cancel',
        loadChildren: () => import('./cancel/cancel.module').then(m => m.CancelPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
    },
    {
        path: 'withdraw-add',
        loadChildren: () => import('./withdraw-add/withdraw-add.module').then(m => m.WithdrawAddPageModule)
    },
    {
        path: 'withdraw',
        loadChildren: () => import('./withdraw/withdraw.module').then(m => m.WithdrawPageModule)
    },  {
    path: 'withdraw-edit',
    loadChildren: () => import('./withdraw-edit/withdraw-edit.module').then( m => m.WithdrawEditPageModule)
  },



];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
