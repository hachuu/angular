import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { MainRouterModule } from './main.router.module';
import { RestService } from '../service/rest.service';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent, Menu1Component],
  imports: [
    CommonModule,
    MainRouterModule
  ],
  providers: [
    RestService
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }