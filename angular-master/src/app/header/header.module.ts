import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderRouterModule } from './header.router.module';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    HeaderRouterModule
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule { }
