import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthenticationGuard} from "./authentication/authentication.guard";

const routes: Routes = [
  {
    path: 'inbox',
    canLoad: [AuthenticationGuard],
    loadChildren: ()=>import('./inbox/inbox.module').then(module=>module.InboxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
