import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Menu3Component } from './menu3/menu3.component';
import { RestService } from '../service/rest.service';
import { MainComponent } from './main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, Menu1Component, Menu2Component, Menu3Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    RestService
  ],
  exports: [
    MainComponent,
  ]
})
export class MainModule { }
