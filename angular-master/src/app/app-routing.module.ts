import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import { MainRoutes } from './main/main.router.module';

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  // ...MainRoutes
  //{ path: 'main', component: MainComponent, }, // url 경로가 /main 일때 MainComponent를 보여준다.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
