import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreRoutingModule } from './core-routing.module';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, CoreRoutingModule, RouterModule],
  exports: [HeaderComponent, NavbarComponent, FooterComponent],
})
export class CoreModule {}
