import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterBottomComponent } from './footer/footer-bottom/footer-bottom.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FooterBottomComponent,
  ],
  imports: [CommonModule, CoreRoutingModule, RouterModule, SharedModule],
  exports: [HeaderComponent, NavbarComponent, FooterComponent],
})
export class CoreModule {}
