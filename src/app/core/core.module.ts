import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NavbarComponent} from './navbar/navbar.component';
import {RouterModule, Router} from '@angular/router';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
  CommonModule,
   RouterModule,
  
  ],

  exports: [NavbarComponent,],
  providers: [RouterModule],

})
export class CoreModule {}
